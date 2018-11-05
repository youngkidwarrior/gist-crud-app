const mongoose = require('mongoose');

const gistSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, default: 'Write your gist here...' },
  userId: { type: String }
});

module.exports = mongoose.model('Gist', gistSchema);
