const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  s_id: {type: String,required: true},  
  topic: { type: String, required: true }
}, {
  timestamps: true,
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
