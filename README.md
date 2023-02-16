# Your Adidas Team

This is a POC for Adidas.

## Tech Stack

**Client:** React, TypeScript, Redux-Toolkit, MaterialUI, Axios, Jest, Cypress.

## Run Locally

Clone the project

```bash
  git clone git@github.com:AgustinLarzabal/your-adidas-team.git
```

Go to the project directory

```bash
  cd your-adidas-team
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_HOST`

`REACT_APP_RAPID_API_KEY`

`REACT_APP_RAPID_API_HOST`

## Running Tests

In order to run end to end tests, we are currently using [Cypress](https://cypress.io/).

To run tests, run the following command

- Cypress: `npm run e2e:ci`
- Jest: `npm run test`

If you want visual feedback from Cypress, do the following:

- In a terminal, run `npm run start:test`
- In another terminar, run `npm run cypress:open`
