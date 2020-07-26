const { EventLocation } = require('../models')
const { ServerError } = require('../../errors/httpResponse/serverError')

class EventLocatoinService {
    async findOrCreate(name){
        try {
            const location = await EventLocation.findOrCreate({where:{name}})
            return location[0].dataValues
        }catch (e) {
            throw new ServerError()
        }

    }

}

module.exports = new EventLocatoinService