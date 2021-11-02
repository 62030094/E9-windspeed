const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: String,
    time: Date,
    wind: Number
  },
  {
    collection:'wm2'
    
    
}
)
const wModel = mongoose.model('wm2', daySchema)

module.exports = wModel