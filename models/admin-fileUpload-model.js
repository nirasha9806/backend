const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = mongoose.Schema(
  {
    itemtype: {
      type: String,
    },

    size: {
      type: String,
    },

    image: {
      type: String,
    },

  },
  { timesamps: true }
);

const Template = mongoose.model('Template', templateSchema);

module.exports = { Template };
