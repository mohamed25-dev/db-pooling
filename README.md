# DB Connection Pool
This is a simple NodeJS application created to demonstrate the performance difference when using a database connection pool. 
It aims to showcase the benefits of utilizing a connection pool for handling database connections.

## How to Run
To run the application, make sure you have Docker installed on your system, add .env file (you can copy .env-example). Then, execute the following command:

```
docker-compose up
```
## Usage
Once the application is up and running, you can access the following APIs to compare the performance between using and not using a database connection pool:

``` GET /api/without-pool/users ``` : This API executes queries without utilizing a connection pool.

``` GET /api/with-pool/users ```: This API executes queries using a database connection pool.


Please note that this is a simplified example meant for educational purposes and may not reflect all aspects of a production-ready application.
