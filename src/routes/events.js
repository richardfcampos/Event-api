const app = require("express").Router()

const UserEventsController = require('../app/controller/UserEventsController')
const { validatePostEvent } = require('../middlewares/routeValidotors/events')
/*
    this is the only route and it has a validation middleware the check if it is getting a correct request
 */
app.route('/')
    .post(validatePostEvent, UserEventsController.store)



module.exports = app