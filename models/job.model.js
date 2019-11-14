const mongoose = require("mongoose");
// set variable Schema to equal mongoose schema
const Schema = mongoose.Schema;
// create mongoose schema for jobs
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
// create job model
const Job = mongoose.model("job", jobSchema);
// export Job model
module.exports = Job;
