const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: String,
    time: Date,
    wind: Number
  },
  {
    collection:'wm10'
    
    
}
)
const wModel = mongoose.model('wm10', daySchema)

module.exports = wModel