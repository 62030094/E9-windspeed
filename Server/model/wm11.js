const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: String,
    time: Date,
    wind: Number
  },
  {
    collection:'wm11'
    
    
}
)
const wModel = mongoose.model('wm11', daySchema)

module.exports = wModel