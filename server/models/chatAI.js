const mongoose = require('mongoose');

const { Schema } = mongoose;
//const bcrypt = require('bcryptjs');

const chatAISchema = new Schema({
userHistory: {
    type: String,
    required: false,
    trim: true
  },
  chatHistory: {
    type: String,
    required: false,
    trim: true
  },
})

const chatAI = mongoose.model('chatAI', chatAISchema);

module.exports = chatAI;