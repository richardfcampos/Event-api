const { body } = require('express-validator')
const addEventValidator = () => {
    return [
        body('name').exists().isString().withMessage('Falta Preencher o nome'),
        body('email').exists().isEmail().withMessage('Falta Preencher o email de forma correta'),
        body('cpf').exists().isString(11)
            .withMessage('Falta Preencher o cpf'),
        body('phone').exists().isString(11).withMessage('Falta Preencher o telefone'),
        body('plain_password').exists().isString().withMessage('Falta Preencher a senha'),
        body('photo_url').isString().withMessage('Foto em formato errado'),
    ]
}

module.exports = { addEventValidator }