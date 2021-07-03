const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workshopPresenterSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
    },

    phone: {
      type: String,
    },

    title: {
        type: String,
    },

    date: {
        type: String,
    },

  },
  { timesamps: true }
);

const ApprovedProposals = mongoose.model('ApprovedProposals', workshopPresenterSchema);

module.exports = { ApprovedProposals };
