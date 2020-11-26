const redis = require('redis')
require('dotenv').config()
const redisHost = process.env.REDIS_HOST;
const redisPort = parseInt(process.env.REDIS_PORT);

function getClient(){
    let client = redis.createClient ({
        port : redisPort,
        host : redisHost
        });
return client
}

 module.exports.getClient = getClient

