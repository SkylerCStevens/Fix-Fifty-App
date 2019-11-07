const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "There has to be a job title"
  },
  description: {
    type: String,
    trim: true,
    required: "There has to be a job description"
  },
  company_name: {
    type: String,
    trim: true,
    required: true
  },
  pay_amount: {
    type: Number,
    required: "There has to be a payment amount"
  }
});

const Job = mongoose.model("job", jobSchema);

module.exports = Job;
