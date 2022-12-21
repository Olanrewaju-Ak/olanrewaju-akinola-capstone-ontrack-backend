# Project Title : OnTrack - Server

OnTack is a personal finance application that helps users manage their daily income and expenses and also helps them create budgets.
This is my capstone project in my fullstack development bootcamp at BrainStation.

## Authors

-   [@olanrewaju-ak](https://github.com/Olanrewaju-Ak)

## Tech Stack

**Client:** React, Sass

**Server:** Node, Express, MySql, Knex.js

## Features

-   Responsive acreoss mobile , tablet and desktop screens

## Run Locally

Clone the project

```bash
  git clone https://github.com/Olanrewaju-Ak/olanrewaju-akinola-capstone-ontrack-backend
```

## Installation/dependencies

In the sever directory, you can run the code

`npm init -y` `npm i cors dotenv express express-session  knex mysql uuid  && npm i nodemon -D`

to install the nodemodules, scripts and dependencies

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_LOCAL_DBNAME = "<ontrack_db_new>";
DB_LOCAL_USER = "<your_db_password>";
DB_LOCAL_PASSWORD = "<your_db_password>";
PORT = 8080;`

## Start Server

To start the server run
`npm run server `

## creating the database

create the ontrack_db database, using MySQL CLI or GUI Client.

To migrate the tables run
`npm run migrate`
If there are issues requiring you to drop the tables, you can run `knex migrate:rollback` or `knex migrate:down`.
Confirm that the tables have been created in our DB. You can drop database on mySql workbench using `Drop database <ontrack_db_new>`.

## Seeding Data

`npm run seed` to execute all seed files and add seed data to your database.
