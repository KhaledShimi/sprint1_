const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  sellerID: {
    type: String,
    required: false,
    trim: true,
    default: 'KhaledShimi 37-6529'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});

mongoose.model('Product', productSchema);
