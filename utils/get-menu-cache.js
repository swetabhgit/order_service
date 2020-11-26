const {promisify} = require('util') 

const getClient = require('../src/connection/redis.connection').getClient
const getCache =async() =>{
    let redisAuth = process.env.REDIS_AUTH
    let client = getClient()
    let auth = promisify(client.auth).bind(client)
    await auth(redisAuth)
        let get = promisify(client.get).bind(client)
        try
        {
           let result = await get('menus')
            return result
        }
        catch(err)
        {
          console.log(err)
        }
}

module.exports = {getCache} 