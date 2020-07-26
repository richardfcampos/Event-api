const ErrorListener = require('./errorListener')
const errorListener = new ErrorListener().getInstance()
class Errors extends Error{

/*
My error class that fires the observer
 */
    constructor( code, errorId, errorMessage ) { 
        super(errorMessage)
        this.code =  code || 500
        this.errorId = errorId || 'INTERNAL_SERVER_ERROR'
        this.errorMessage = errorMessage || 'Erro não esperado'
        errorListener.fire(this)
    }

    toString(){
        return JSON.stringify(this);
    }

}


module.exports = Errors
