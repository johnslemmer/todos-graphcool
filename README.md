# todos-graphcool

[![**WORK IN PROGRESS**](https://img.shields.io/badge/work-in--progress-red.svg)](TODO.md)

## Getting Started

Requirements:
* a computer with internet connection.
* [`node`](https://nodejs.org/en/download/package-manager/)
* [`npm`](https://www.npmjs.com/get-npm) (which comes with any modern node install)

Nice to haves:
* `git` (kind of assumed that you have it, but in
  [case you don't](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
  Also, come on, [git is awesome](https://github.com/johnslemmer/campaign-git),
  don't just download [the zip of this repo](https://github.com/johnslemmer/todos-graphcool/archive/master.zip)).
* `yarn` instead of `npm` to manage packages.  Its awesome, faster, safer,
  and can work offline.  Simply `npm install -g yarn`.

> If you don't want to use git or yarn you are on your own translating below ;) hint
`npm exec` or even better `npx` are helpful new tools in `npm`

Then using your favorite command line, run:

```
git clone https://github.com/johnslemmer/todos-graphcool.git
cd todos-graphcool
yarn install
yarn graphcool deploy
```

This last `graphcool deploy` command will walk you through account setup and deployment to
graphcool's server.  Graphcool has proven to be very helpful.  They provide an
awesome framework to easily develop and deploy GraphQL APIs/modeling/databases.
And its free during development (essentially because your traffic will certainly
be minimal)! Check out their documentation https://graph.cool/.

## Purpose

I always really enjoyed Meteor's [TODO tutorials](https://github.com/meteor/todos)
back when I was learning their technology stack. Even though I'm no longer
currently utilizing the Meteor framework I often find myself trying to recreate
their TODOs tutorial to explore the ins and outs of some other technology.  To
see where the strengths and hold ups are.

This is my attempt to recreate the server-side database/API required to support
a front end TODOs app utilizing a graphcool-graphql technology stack.

I know working on a little project like this can help me figure out any hurdles
there would be to using a such technologies.  I hope my explorations prove
useful to others. And potentially act as a boilerplate for projects based
on such technologies.

[![Backend by Graphcool](https://www.graph.cool/static/media/badge.10d1f6dd.svg)](https://graph.cool/)
