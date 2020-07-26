const app = require('express').Router()
const { cacheEvents } = require('./middlewares/cache/cacheEvents')
app.use(require('./config/routes'))

/*
    Event route has a middleware with cache to avoid duplicated events
*/

app.use('/event', cacheEvents ,require('./routes/events'))

app.use('/*', (req, res) => res.status(404).send('<h1>Page Not Found</h1>'))

module.exports = app