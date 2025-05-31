const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  extensions: [{
    name: String,
    number: String,
    server: String
  }],
  settings: {
    sipServer: String,
    outboundProxy: String,
    port: String,
    enableNotifications: Boolean,
    autoAnswer: Boolean,
    recordingStorage: {
      type: String,
      enum: ['local', 'nas', 's3'],
      default: 'local'
    },
    storageConfig: {
      path: String,
      credentials: Object
    }
  }
}, {
  timestamps: true
});
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
module.exports = mongoose.model('User', userSchema);