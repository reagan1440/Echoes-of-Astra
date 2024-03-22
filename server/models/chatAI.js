const mongoose = require('mongoose');

const { Schema } = mongoose;
//const bcrypt = require('bcryptjs');

const ChatAISchema = new Schema({
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

const ChatAI = mongoose.model('ChatAI', ChatAISchema);

module.exports = ChatAI;