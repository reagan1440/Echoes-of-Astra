const { Schema } = require('mongoose');
//const bcrypt = require('bcryptjs');
const dateFormat = require('../utils/dateFormat')

const ChatAISchema = new Schema({
usersDream: {
    type: String,
    required: false,
    trim: true
  },
  aiResponse: {
    type: String,
    required: false,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date)=>dateFormat(date)
  }
})



module.exports = ChatAISchema;