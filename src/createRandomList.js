import { fromEvent } from 'graphcool-lib'

export default async event => {
  try {
    // get stuff out of the event.
    const { name } = event.data;
    const graphcool = fromEvent(event);
    const api = graphcool.api('simple/v1');

    const listId = await createList(api, name);
    await createTodo(api, "foobar", listId);

    return {
      data: {
        id: listId,
      }
    };
  } catch (e) {
    console.log(e);
    return { error: 'An unexpected error occured while creating a random list.' };
  }
}

async function createList(api, name) {
  const createList = `
    mutation createList($name: String!) {
      createList(name: $name) {
        id
      }
    }
  `;

  const { createList } = await api.request(createList, { name });
  return createList.id;
}

async function createTodo(api, name, listId) {
  const createTodo = `
    mutation createTodo($name: String!, $listId: ID!) {
      createTodo(name: $name, listId: $listId) {
        id
      }
    }
  `;

  const { createTodo } = await api.request(createTodo, { name, listId });
  return createTodo.id;
}

async function getList(api, id) {
  const getList = `
    query getList($id: ID!) {
      List(id: $id) {
        id
      }
    }
  `;

  const { List } = await api.request(createTodo, { id });
  return List;
}
