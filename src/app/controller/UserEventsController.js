const  UserEventsService  = require('../services/UserEventsService')


class UserEventsController {
    async store(req, res) {
        await UserEventsService.store(req, res)
    }

}

module.exports = new UserEventsController