const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: String,
    time: Date,
    wind: Number
  },
  {
    collection:'wm8'
    
    
}
)
const wModel = mongoose.model('wm8', daySchema)

module.exports = wModel