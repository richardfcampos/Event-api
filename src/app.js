require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.tes' : '.env'
})
const express = require('express')
const Sentry = require('@sentry/node')
/*
    it runs a observer that catches erros and can subscribe for what ever task I want it to do
*/
require('./errors/observers')


class appConstroller {
    constructor() {
        this.express = express()
        this.sentry()
        this.middlewares()
        this.routes()
    }

    sentry() {
        Sentry.init({ dsn: process.env.SENTRY_DSN , environment: process.env.SENTRY_ENV})
        this.express.use(Sentry.Handlers.requestHandler())
        this.express.use(Sentry.Handlers.errorHandler({
            shouldHandleError(error) {
                // Capture all 404 and 500 errors
                if (error.status > 400) {
                    return true
                }
                return false
            }
        }))
    }

    middlewares() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new appConstroller().express