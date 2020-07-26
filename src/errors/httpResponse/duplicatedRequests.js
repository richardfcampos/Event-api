const Errors = require('../Errors')
class DuplicatedRequests extends Errors {
    constructor(params) {
        super(400, 'DUPLICATED_REQUEST', `this request is duplicated`);
    }

}

module.exports = DuplicatedRequests