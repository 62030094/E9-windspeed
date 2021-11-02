const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: String,
    time: Date,
    wind: Number
  },
  {
    collection:'wm12'
    
    
}
)
const wModel = mongoose.model('wm12', daySchema)

module.exports = wModel