const getNonRequired = (required, params) => {
    //we return all the fields the ar required and not in the request
    return  required.filter(d => !params[d])
}

module.exports = { getNonRequired }