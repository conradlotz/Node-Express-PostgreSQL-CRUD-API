# Node-Express-PostgreSQL-CRUD API
Small solution to showcase the basics of NodeJs, ExpressJs and PostgreSQL database operations.
This is a Rest Api solution using basic database create, read, update and delete operations (CRUD)

## Installation
Download and install PosgresSql.
Download the latest NodeJs version

Install expressjs
```bash
$ npm install -g express
```

Install [Bluebird](bluebird http://bluebirdjs.com/docs/features.html)
```bash
$ npm install bluebird
```

Install pg-promise
```bash
$ npm install pg-promise
```

##Database
Run the sql script in the application folder using the psql command line to create the database.
Ensure that psql is configured in the windows environment variables

```psql
psql -U <username> -f player.sql
```

##Configuration
Ensure that the server/db.js file postgres database connection is updated. Below find the standard configuration
```
var connectionString = 'postgres://postgres:root@localhost:5432/tmc';
```



