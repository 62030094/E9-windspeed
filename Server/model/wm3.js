const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: String,
    time: Date,
    wind: Number
  },
  {
    collection:'wm3'
    
    
}
)
const wModel = mongoose.model('wm3', daySchema)

module.exports = wModel