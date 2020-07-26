const ErrorListener = require('../errorListener')
const errorListener = new ErrorListener().getInstance()
const Sentry = require('@sentry/node')
/*
task of sending a message with the error every tyme the observer catches ir
 */
const SentryLog = (error) => {
    Sentry.captureMessage(error)
}
errorListener.subscribe(SentryLog)

