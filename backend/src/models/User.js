const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  roles: {
    user: {
      type: Number,
      default: 8150,
    },
    admin: Number,
    editor: Number,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: String,
  loginCode: Number,
});

module.exports = mongoose.model('User', userSchema);
