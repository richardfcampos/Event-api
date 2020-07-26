const { getNonRequired } = require('../../../utils/helpers/paramHelpers')
const InvalidParam = require('../../../errors/httpResponse/invalidParam')
const validate = require('uuid-validate');
const validatePostEvent = (req, res, next) => {
    try{
        const required = ['user_id', 'event', 'location']
        //we validade if all the fields ar on the request
        const missingParams = getNonRequired(required, req.body)
        //if there ar fields that ar required and no on the request, we send an error message
        if (missingParams.length > 0){
            throw new InvalidParam(missingParams)
        }
        //check if uuid is valid
        if (!validate(req.body.user_id)){
            throw new InvalidParam(['user_id'])
        }
        next()
    }catch(error){
        res.status(error.code||500).json(error);
    }
}


module.exports = { validatePostEvent }