const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const approvedresearcherSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
    },

    date: {
      type: String,
    },

    title: {
      type: String,
    },

  },
  { timesamps: true }
);

const ApprovedResearcher = mongoose.model('ApprovedResearcher', approvedresearcherSchema);

module.exports = { ApprovedResearcher };
