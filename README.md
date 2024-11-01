
# Inventory Management System

## Sales Microservice

The Sales Microservice is a dedicated service within the Inventory Management System that handles sales order management, business credit scoring, and tax compliance for registered businesses.

---

## Features
- **Order Management**: Creates and stores orders from department heads in Postgres and MongoDB.
- **Credit Score Calculation**: Calculates a credit score based on the business's transaction history.
- **Tax Compliance**: Logs sales transactions to an external tax authority API for regulatory compliance.

---


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

## API Endpoints

### Create Order

- **POST** `/orders`
    - **Description**: Registers a new order for a business.
    - **Request Body**:
      ```json
      {
        "businessId": "string",
        "departmentId": "string",
        "amount": "decimal",
        "status": "string"
      }
      ```
    - **Response**: Confirmation of order creation.

### Retrieve Order Details

- **GET** `/orders/:businessId/details`
    - **Description**: Retrieves total order count and amount for a specified business.
    - **Response**:
      ```json
      {
        "totalOrders": "number",
        "totalAmount": "decimal"
      }
      ```

### Calculate Credit Score

- **GET** `/orders/:businessId/credit-score`
    - **Description**: Returns a credit score based on the business’s transaction history.
    - **Response**:
      ```json
      {
        "score": "number"
      }
      ```

### External API Integration

- **Description**: Automatically sends each order to the tax authority’s API at `https://taxes.free.beeceptor.com/log-tax`.
- **Response**: Logs the sales transaction to the external tax authority API.
- **Note**: The external API is a mock server and does not require authentication.
- **Request Body**:
  ```json
  {
    "businessId": "string",
    "departmentId": "string",
    "amount": "decimal",
    "status": "string"
  }
  ```
- **Response**: Confirmation of the sales transaction log.
- **Note**: The external API is a mock server and does not require authentication.
- **Response**:
  ```json
  {
    "message": "string"
  }
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

