## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migration

```bash
$ npx prisma migrate dev --name post
```


## Running Prisma Studio
```bash
$ npx prisma studio
```

## Generation modules, sercices, resolvers, controller, model
```bash
$ npx nest generate module <name>
$ npx nest generate service <name>
$ npx nest generate resolver <name>
$ npx nest generate controller <name>
$ npx nest generate class <name>/<name>
```