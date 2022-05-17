const Mongoose = require('mongoose');

const deliverySchema = new Mongoose.Schema({
  deliveryID: {
    type: String,
    required: true
  },
  deliveryCustomerID: {
    type: String
  },
  deliveryAddress: {
    type: String
  },
  deliveryType: {
    type: String
  },
  deliveryBy: {
    type: String
  },
  deliveryDate: {
    type: String
  },
  orderdescription: {
    type: String
  }
})

module.exports = Mongoose.model('Delivery', deliverySchema);