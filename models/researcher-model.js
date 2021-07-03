const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researcherSchema = mongoose.Schema(
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

    researchPaper: {
      title: {
        type: String,
      },
      date: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  { timesamps: true }
);

const Researcher = mongoose.model('Researcher', researcherSchema);

module.exports = { Researcher };
