This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

to install dependencies. Then run:

### `npm run dev`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
This will also start a mocked graphql server on http://localhost:5000/ using
the json-graphql-server package and the provided json file.

### `npm test`

Launches the test runner in the interactive watch mode.\

ApolloClient was used to interact with the mocked graphql server. You are able to use ApolloClient for state management, but I had some difficulty with it and ended up using local state for the table and passing in props for the few components that needed anything.

Tests were done using Jest and react-testing-library.
