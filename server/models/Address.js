// Address.js
const { Schema, model } = require('mongoose');

const AddressSchema = new Schema({
  unit: {
    type: String,
    trim: true,
  },
  streetNumber: {
    type: String,
    trim: true,
  },
  streetName: {
    type: String,
    trim: true,
  },
  suburb: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  postcode: {
    type: String,
    trim: true,
  },
});



module.exports = AddressSchema;
