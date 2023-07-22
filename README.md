# How to install

**First :**

```bash
Open CLI (Command Line Interface)

Clone Repo

git clone https://github.com/aryejfa/test-xsis.git
```

```bash
cd test-xsis
```

```bash
Open Redis Server and Running
```

```bash
cd test-xsis/docker-graylog

running grayLog

docker-compose up -d
```

```bash
running
mySql

in my case use phpmyadmin and mysql
```

```bash
install node js

npm install
```

```bash
create database by sequelize

npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

**Second :**

```bash
Run Unit Testing with Jest & Supertest

npm run test
```

```bash
Run apps

npm run dev

Endpoint CRUD movie
http://localhost:3001

Endpoint GrayLog
http://localhost:9000

Access Login GrayLog
Username : admin
Password : admin
```

# Environment

**JavaScript runtime:**

JavaScript runtime with Node JS [Node JS](https://nodejs.org/en/) version 18.14.2

**Framework Backend:**

This project was generated with [Express JS](https://expressjs.com/en/starter/installing.html) version 4.18.2.

**Database:**

This project was generated with MySql Database use with [Xampp](https://www.apachefriends.org/download.htmll). 

This project was generated with Cache use with [Redis](https://github.com/MSOpenTech/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.zip). 


**Logging:**

This project was generated with use with [GrayLog](https://www.graylog.org/). 


**Infra:**

This project was generated with docker compose use with run [Docker Desktop Windows](https://www.docker.com/products/docker-desktop/). 


Addon Plugin

Framework Express [Framework Express](https://expressjs.com/en/starter/installing.html).

```bash
mkdir myapp
cd myapp

npm init
npm install express
```

Build an Authentication API with JWT Token [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).

```bash
npm install jsonwebtoken
```

(CORS) Cross Origin Resource Sharing [CORS](https://expressjs.com/en/resources/middleware/cors.html).

```bash
npm install cors
```

Cache Redis [Redis](https://www.npmjs.com/package/ioredis).

```bash
npm install ioredis
```

mysql2 [mysql2](https://www.npmjs.com/package/ioredis).

```bash
npm install mysql2
```

sequelize [sequelize](https://sequelize.org/).

```bash
npm install sequelize
```

winston [winston](https://github.com/winstonjs/winston).

```bash
npm install winston
```