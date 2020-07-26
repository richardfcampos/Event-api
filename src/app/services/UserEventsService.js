const  EventsService = require('./EventsService')
const  EventLocatoinService = require('./EventLocatoinService')
const  { UserEvent, sequelize } = require('../models')
const { ServerError } = require('../../errors/httpResponse/serverError')

class UserEventsService {
    async store(req, res){
        const { event, location, user_id } =  req.body
        try {
            //first we find a event, if it doesent exist, we create it and get its id
            const eventData = await EventsService.findOrCreate(event)
            const event_id = eventData.Oid
            //now we find te location, if it doesent exist, we create it and get its id
            const eventLocationData = await EventLocatoinService.findOrCreate(location)
            const event_location_id = eventLocationData.Oid
            //finally we save the event from the user
            const userEvent = await UserEvent.create({user_id,event_location_id, event_id })
            return res.json(userEvent)
        }catch (e) {
            res.status(error.code||500).json(e);
        }

    }

}

module.exports = new UserEventsService