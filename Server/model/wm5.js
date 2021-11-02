const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: String,
    time: Date,
    wind: Number
  },
  {
    collection:'wm5'
    
    
}
)
const wModel = mongoose.model('wm5', daySchema)

module.exports = wModel