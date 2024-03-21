const mongoose = require('mongoose');

const { Schema } = mongoose;

const donationSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
