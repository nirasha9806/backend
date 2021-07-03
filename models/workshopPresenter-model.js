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

    proposal: {
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

const WorkshopPresenter = mongoose.model('WorkshopPresenter', workshopPresenterSchema);

module.exports = { WorkshopPresenter };
