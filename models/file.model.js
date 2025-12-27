const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: true
  },

  fileName: {
    type: String,
    required: true
  },

  fileType: {
    type: String,
    required: true   // 👈 VERY IMPORTANT
  },

  uploadedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('File', FileSchema);
