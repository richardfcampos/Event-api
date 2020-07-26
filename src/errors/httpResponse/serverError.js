const Errors = require('../Errors')
class ServerError extends Errors {
    constructor() {
        super(500, 'SERVER_ERROR', `Internal Server Error`);
    }

}

module.exports = ServerError