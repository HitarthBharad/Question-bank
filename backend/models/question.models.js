const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  s_id: {type: String,required: true},  
  t_id: { type: String, required: true },
  question: {type: String,required:true},
  oa: {type: String,required:true},
  ob: {type: String,required:true},
  oc: {type: String,required:true},
  od: {type: String,required:true},
  ans: {type: String,required:true}
}, {
  timestamps: true,
});

const Questions = mongoose.model('Questions', questionsSchema);

module.exports = Questions;