const Redis = require('ioredis');

var host = process.env.HOST;

const redis = new Redis({
    host: process.env.HOST,
    port: process.env.PORTREDIS,
    username: process.env.USERNAMEREDIS,
    password: process.env.PASSWORDREDIS
});

redis.on('error', (err) => console.log('Redis Client Error', err));
redis.on('reconnecting',() => console.log('reconnecting'));
redis.on('connect', () => console.log('Redis is connected'));

module.exports = redis