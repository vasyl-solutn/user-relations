## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Up Mongo

docker-compose up -d

npm run start:dev

`

```
mutation {
  createUser(name: "John Doe", age: 30) {
    id
    name
    age
  }
}

query {
  users {
    id
    name
    age
  }
}
```
