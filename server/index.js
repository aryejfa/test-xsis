const express = require("express");
const router = require("../router");

const server = express();
server.use(express.json());

server.use("", router);

const jwt = require("jsonwebtoken");
const Redis = require("../redis");

let prvtkey =
  "-----BEGIN EC PRIVATE KEY-----\n" +
  process.env.PRIVATEKEY1 +
  process.env.PRIVATEKEY2 +
  process.env.PRIVATEKEY3 +
  "-----END EC PRIVATE KEY-----";

const authorization = process.env.AUTHORIZATION;
if (authorization === process.env.AUTHORIZATION) {
  const token = jwt.sign({ authorization: authorization }, prvtkey, {
    expiresIn: "3600s",
    algorithm: "ES256",
  });
  Redis.set("access_token", token);
} else {
  Redis.set("access_token", "");
}

module.exports = server;
