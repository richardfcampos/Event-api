const { validationResult } = require('express-validator')

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    let extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    extractedErrors = extractedErrors.filter((errors) => {
        for(erro in errors){
            if (errors[erro] === 'Invalid value') return false
        }
        return true

    })

    return res.status(400).json({
        errors: extractedErrors,
    })
}

module.exports = { validate }