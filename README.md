# Lbb

This project was generated using [Nx](https://nx.dev).

## Version Control Guide Lines :

This Repository has three major branches :

- develop : this branch is the branch that the features branches are going to be merged in.
- preprod : after each sprint the develop will be merged into this branch
- prod : after each number of sprint that constitute a deliverable product the lastest preprod will be merged here and tags will be created from this branch .

Feautre branches :
Each feature branch name will hold the following format LB-00X the same first sufix as the ticket name of the feature in clickup , when you complete the feature branch you go and create a PR (Pull request) and request a review in github plus send a message in slack to the team-member(s) that you requested a review from .

Knowing that this is a mono-repo project meaning it contains multiple apps in it you should specify the app name as a context for your commits , for example if your commit has a modification in the backend api app your commit should be like this :
[API] .... commit title goes here ....
if for example your commit containes modifications in the frontend react app then :
[FRONTEND] .... commit title goes here ...

ps: you don't merge your PR unless if its an emergency or time contrained situation , and don't forget to send a reminder about your non merged PR in the last day of the week or Request an explanation for why it hasn't been merged yet.

If your PR has been closed without being merged and rejected through clickup , look into the detailes of the rejection make the necessary changes in your branch and create another PR with the new changes .

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@lbb/mylib`.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
