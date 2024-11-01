
## Inventory Management System


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

## Database

```bash
# create migration, Typeorm will automatically create a new migration file in the src/database/migrations directory from the current database schema based on the entities you have or have changed.
$ npm run migration:create -- src/database/migrations/create-table-for-invoices

# run migration, Typeorm will automatically run all pending migrations.
$ npm run migration:run

# revert migration, Typeorm will automatically revert the last migration file in the src/database/migrations directory.
$ npm run migration:revert

# show all migrations, Typeorm will automatically show all migrations in the src/database/migrations directory.
$ npm run migration:show

# generate migration, Typeorm will automatically generate a new migration file in the src/database/migrations directory based on the entities you have or have changed.
$ npm run migration:generate

# drop database, Typeorm will automatically drop the database schema.
$ npm run schema:drop

# Seed database, Typeorm will automatically seed the database schema.
$ npm run seed:run

# Create Seed, Typeorm will automatically create a new seed file in the src/database/seeds directory.
$ npm run seed:create -- --name src/database/seeds/create-seed-for-logs

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

## Docker

``` 
# Run the docker-compose file
$ docker-compose up
```

## API Documentation

```
# Swagger UI
http://localhost:3000/api/v1.0/swagger

```

## Application Documentation

```
# To generate and serve the documentation using Compodoc, follow these steps:

# Generate the documentation
$ npm run compodoc

# Serve the documentation
$ npm run compodoc:serve

# Open the browser and navigate to http://localhost:8080
```

