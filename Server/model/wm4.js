const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: String,
    time: Date,
    wind: Number
  },
  {
    collection:'wm4'
    
    
}
)
const wModel = mongoose.model('wm4', daySchema)

module.exports = wModel