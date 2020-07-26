const { Event } = require('../models')
const { ServerError } = require('../../errors/httpResponse/serverError')

class EventsService {
    async findOrCreate(name){
        try {
            const event = await Event.findOrCreate({where:{name}})
            return event[0].dataValues
        }catch (e) {
            throw new  ServerError()
        }

    }

}

module.exports = new EventsService