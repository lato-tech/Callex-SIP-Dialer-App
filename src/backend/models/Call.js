const mongoose = require('mongoose');
const callSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  extension: {
    name: String,
    number: String,
    server: String
  },
  type: {
    type: String,
    enum: ['audio', 'video'],
    required: true
  },
  direction: {
    type: String,
    enum: ['incoming', 'outgoing'],
    required: true
  },
  number: {
    type: String,
    required: true
  },
  duration: Number,
  startTime: Date,
  endTime: Date,
  recording: {
    path: String,
    storage: String
  },
  transcript: String,
  notes: String
}, {
  timestamps: true
});
module.exports = mongoose.model('Call', callSchema);