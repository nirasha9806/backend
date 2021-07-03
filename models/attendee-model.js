const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendeeSchema = mongoose.Schema(
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
  },
  { timesamps: true }
);

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = { Attendee };
