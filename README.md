# skygoal

# Why Node JS
Node.js: Node.js provides a lightweight and efficient runtime environment for building server-side applications, making it well-suited for developing RESTful services.

# why Express
Express.js: Express.js is a popular web application framework for Node.js, providing a robust set of features for building web servers and APIs. It simplifies the process of defining routes, handling requests, and managing middleware.

# why mongodb
MOngoDB: Chosen as the relational database management system for storing event data and  manipulating and updating the events data


# Why dotenv
dotenv: dotenv is a module that loads environment variables from a .env file into process.env. It's useful for securely managing sensitive information like API keys.

## Prerequisites:
1.Node JS installed in system.
2.later  installed packages like express,axios and dotenv(npm packages).
3.installed mysql to interact with database and manage events.
4.I ensure that the api keys,database information i accessed from .env for security.
5.I implemented  MVC (Model-View-Controller) architecture it helps organize and structure applications.


## project Structure
project-root/
│
├── controllers/
│   └── user.js
│
├── models/
│   └── user.js
│
├── middileware/
│   |── auth.js
|   |__ validaton.js
|
├── routes/
│   └── route.js
│
├── data/
│   └── mongoose.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md

API Documents:
-------------
## Introduction
 API provides a user can get events near by him with 14 days of period.

## Base URL
Method: POST
http://localhost:3333/



 

## Login
# Request
post /login/

 Endpoint : http://localhost:3333/login
Response
HTTP/1.1 200 OK

Status: 200 Successfull Login
Content-Type: application/json

{token :"ehgsyKKsudldldpkskhsuJJUUksl_sjhdhydlodkiuhysisjuhidjsuihs"}

![Screenshot 2024-04-19 103929](https://github.com/saiganesh6841/skygoal/assets/147468914/55e6dd0b-2cb4-49fc-a0ab-f76a3420241b)


[]
## Regsiter
# Request
POST /register/

 Endpoint : http://localhost:3333/register
Response
HTTP/1.1 201 Created
Status: 201 succesfully register
Content-Type: application/json

{"username":"ganesh00","full name":"sai ganesh","email":"Sai@gmqil.com"}
![Screenshot 2024-04-19 103726](https://github.com/saiganesh6841/skygoal/assets/147468914/2c74512f-7a99-4039-95e2-24458e70ed81)

## UserDetails
# Request
POST /userDetails/

 Endpoint : http://localhost:3333/userDetails
Response
HTTP/1.1 201 Created
Status: 201 user details revertrived successfully
Content-Type: application/json

![Screenshot 2024-04-19 104013](https://github.com/saiganesh6841/skygoal/assets/147468914/572fcb16-4f29-48ee-95f4-064d63aa6ddd)


