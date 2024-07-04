# Express App Template

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

This is a template application built with Node.js and Express.js, configured with EJS for templating, Firebase for backend services, and TailwindCSS for styling.

## Installation

To get started with this project, clone the repository and install the dependencies using Yarn:

```bash
git clone https://github.com/ryanfaiz/express-app-template
cd express-template-app
yarn install
```

Create a `.env` file in the root directory with your Firebase configuration:

```
FIREBASE_API_KEY=<your-api-key>
FIREBASE_AUTH_DOMAIN=<your-auth-domain>
FIREBASE_PROJECT_ID=<your-project-id>
FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
FIREBASE_APP_ID=<your-firebase-app-id>
```

## Usage

To run the application in development mode:

```bash
yarn dev
```

To run the application in production mode:

```bash
yarn start
```

## Scripts

- `yarn dev`: Starts the server using Nodemon for automatic restarts.
- `yarn start`: Starts the server in production mode.
- `yarn build`: Runs Prettier and builds TailwindCSS for production.
- `yarn docs`: Generates documentation using JSDoc.
- `yarn test`: Runs Jest for testing.
- `yarn lint`: Lints the project using ESLint.
- `yarn lint:fix`: Fixes linting issues automatically.

## Dependencies

- `daisyui`: ^4.12.10
- `ejs`: ^3.1.10
- `express`: ^4.19.2
- `express-ejs-layouts`: ^2.5.1
- `firebase`: ^10.12.2
- `firebase-admin`: ^12.2.0
- `tailwindcss`: ^3.4.4

## Dev Dependencies

- `@types/jest`: ^29.5.12
- `autoprefixer`: ^10.4.19
- `dotenv`: ^16.4.5
- `eslint`: ^9.6.0
- `eslint-plugin-jsdoc`: ^48.5.0
- `eslint-plugin-node`: ^11.1.0
- `husky`: ^9.0.11
- `jest`: ^29.7.0
- `jsdoc`: ^4.0.3
- `nodemon`: ^3.1.4
- `postcss`: ^8.4.39
- `postcss-cli`: ^11.0.0
- `prettier`: ^3.3.2
- `prettier-plugin-tailwindcss`: ^0.6.5
- `supertest`: ^7.0.0

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.