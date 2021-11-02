const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: String,
    time: Date,
    wind: Number
  },
  {
    collection:'wm6'
    
    
}
)
const wModel = mongoose.model('wm6', daySchema)

module.exports = wModel