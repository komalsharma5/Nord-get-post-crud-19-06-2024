const { Series } = require("../Model")


const create_series_S = (data) =>{
    return Series.create(data)
}

module.exports = {
    create_series_S
}