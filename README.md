# Redwood Tutorial App (TypeScript)

This repo represents the state of the app at the interval created during the [Redwood Tutorial](https://redwoodjs.com/tutorial).
It is meant to be a starting point for those working on the second half of the Tutorial, starting at the [Intermission](https://redwoodjs.com/docs/tutorial/intermission) and wishing to continue with TypeScript.

This repo contains much more styling than the one we built together in the tutorial, but is functionally identical.

## Setup

The [tutorial itself](https://redwoodjs.com/docs/tutorial/chapter1/prerequisites) contains instructions for getting this repo up and running, but here is a summary of the commands:

```bash
git clone https://github.com/rushabhhere/redwood-tutorial-ts
cd redwood-tutorial-ts
yarn install
yarn rw prisma migrate dev
yarn rw dev
```