const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: Date,
    time: Date,
    wind: Number
  },
  {
    collection:'y2010'
    
    
}
)
const wModel = mongoose.model('y2010', daySchema)

module.exports = wModel