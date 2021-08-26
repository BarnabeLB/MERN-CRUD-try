const {Schema, model} = require("mongoose");

const thingSchema = new Schema({
    name : String,
    type : String
})

const Thing =  model('thing', thingSchema)

module.exports = Thing;