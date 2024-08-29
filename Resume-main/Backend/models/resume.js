const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  personalInformation: {
    firstName: String,
    lastName: String,
    profession: String,
    address: String,
    city: String,
    state: String,
    zipCode: String,
  },
  education: [
    {
      school: String,
      degree: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  experience: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  contactInformation: {
    email: String,
    phone: String,
  },
  awards: [
    {
      title: String,
      date: Date,
      description: String,
    },
  ],
});

module.exports = mongoose.model('Resume', ResumeSchema);
