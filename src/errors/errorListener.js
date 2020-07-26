/*
A error observer that is a singleton
*/

class ErrorListener {
    constructor() {
        this.observer = []
    }

    subscribe(fn) {
        this.observer.push(fn)
    }

    fire(error) {
        this.observer.forEach( fn =>{
            fn(error)
        })
    }

}

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new ErrorListener();
        }
    }

    getInstance() {
        return Singleton.instance;
    }

}

module.exports = Singleton