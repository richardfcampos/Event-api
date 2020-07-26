const Errors = require('../Errors')
class InvalidParam extends Errors {
    constructor(params) {
        super(400, 'INVALIDO_PARAMS', `Invalid_fields: ${params.join(', ')}`);
    }

}

module.exports = InvalidParam