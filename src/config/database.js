require('dotenv').config({
  path: '.env'
})

module.exports = {
  "host": process.env.DB_HOST,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "operatorsAliases": 0,
  "logging": false,
  "define": {
    "timestamps": false,
    "underscored": false,
    "underscoredAll": false
  },
  "dialect": process.env.DB_DIALECT ||  'postgres',
  "storage": "./__tests__/database.sqlite",
  "dialectOptions": {
    "options": {
      "useUTC": false,
      "dateFirst": 1,
      "enableArithAbort": false,
      "trustServerCertificate": true
    }
  }
}