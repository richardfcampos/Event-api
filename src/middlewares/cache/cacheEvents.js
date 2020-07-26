const redis = require('redis')
const util = require('util')
const DuplicatedRequests = require('../../errors/httpResponse/duplicatedRequests')
const client = redis.createClient(process.env.REDIS_URL)
client.hget = util.promisify(client.hget)
/*
    the chache middleware saves the request by the user in Redis, with an  expiretion time that can be set in the
    .env, for avoiding duplicated requests, case its duplicates, it returns a Error message
*/

const cacheEvents = async (req, res, next) => {
    try{
        const cacheValue = await client.hget(req.body.user_id, JSON.stringify(req.body))
        console.log(cacheValue)
        if (cacheValue){
            throw new DuplicatedRequests()
        }
        await client.hset(req.body.user_id, JSON.stringify(req.body), JSON.stringify(req.body))
        await client.expire(req.body.user_id, process.env.CACHE_EXPIRES)
        next()

    }catch(error){
        res.status(error.code||500).json(error);
    }
}


module.exports = { cacheEvents }