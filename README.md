# gql-server-boilerplate

## About

This project is a simple GraphQL server that you can use as a base of your next project.

Sometimes it's hard to set up convenient Development Environment and it may take a lot of time. In this project i've tried to make all that annoying things for you, and let you focus more on your code.

Also, `master` branch of the repository is deployed to Heroku, so you can open GraphQL Playground and take a look at schema or test some Query/Mutation - https://gql-server.herokuapp.com/graphql

## Main features:
- Last JavaScript features, including imports/exports, thanks to [Babel](https://babeljs.io/)
- Server auto restarting on file changes with [Nodemon](https://nodemon.io/)
- Write clean code - [ESLint](https://eslint.org/) with [AirBnb config](https://github.com/airbnb/javascript) - most popular JavaScript code style
- Environment Variable configs with type validations - [envalid](https://github.com/af/envalid)
- Deployment to [Heroku](https://www.heroku.com/), a good way to start

## Run for Development

- [Install](https://docs.mongodb.com/manual/administration/install-community/) and start MongoDB server
- Install packages - `npm install`
- Setup environment variables:
- - Create `.env` file at root of the repository
- - Set required variables. For most cases will be enough just copy and paste all content from `.env.example` file to `.env`.
- Start the server - `npm start`

## Deployment
### Heroku

You can easily deploy this server to [Heroku](https://www.heroku.com/).
- Create application on [Heroku dashboard](https://dashboard.heroku.com/apps)
- Set Config Vars(Environment variables) in settings section of your application

Then

- Install and setup Heroku CLI - https://devcenter.heroku.com/articles/heroku-cli
- Add remote to the repository - `heroku git:remote -a your-app-name`
- Push the repository to Heroku - `git push heroku master`

Or, if you're using GitHub, you can setup Heroku GitHub Integration and all pushes to GitHub will automaticly trigger deployment to Heroku - https://devcenter.heroku.com/articles/github-integration

After each push to Heroku it will run npm script `heroku-postbuild` that will create build of the server, then Heroku will run command from `Procfile` file, in our case it's `npm run start-build`


### Manual

- Clone this repository(or pull changes when updating) on your server
- Run `npm install`
- Run `npm run build` to make build of the server
- Set environment variables (create .env file or set them manually)
- Run `npm run start-build`

OR

- Make build - `npm run build`
- Somehow deploy your `build` folder, `package.json` and `package-lock.json` files to your server
- Install packages - `npm install`
- Set environment variables (create .env file or set them manually)
- Run `npm run start-build`

## TODO

- [x] Babel & Nodemon
- [x] ESLint - AirBnb style
- [x] Sign In & Sign Up with JWT
- [x] Basic Query/Mutation
- [x] Deployment to Heroku
- [ ] Dataloader
- [ ] Subscriptions
