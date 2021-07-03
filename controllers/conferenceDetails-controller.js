const { Conference } = require("../models/conference-model");

const AddDetails = async (req, res, next) => {
  let conference = new Conference(req.body);
  await conference
    .save()
    .then((conference) => {
      res.status(200).json({ conference: "conference is added succesfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save database");
    });
};

const getDetails = async (req, res) => {
  await Conference.find(function (err, conference) {
    if (err) console.log(err);
    else {
      res.json(conference);
    }
  });
};

const editDetails = async (req, res) => {
  await Conference.findById(req.params.id, function (err, conference) {
    res.json(conference);
  });
};

const updateDetails = async (req, res) => {
  await Conference.findById(req.params.id, function (err, conference) {
    console.log(req.body);
    if (!conference) res.status(404).send("data is not found");
    else {
      conference.research_name = req.body.research_name;
      conference.author_name = req.body.author_name;
      conference.research_Type = req.body.research_Type;

      conference
        .save()
        .then((conference) => {
          console.log(conference);
          res.json(conference);
        })
        .catch((err) => {
          res.status(400).send("unable to update database ");
        });
    }
  });
};

const deleteDetails = async (req, res) => {
  await Conference.findByIdAndRemove(
    { _id: req.params.id },
    function (err, conference) {
      if (err) res.json(err);
      else res.json("successfully removed");
    }
  );
};
module.exports = {
  AddDetails,
  getDetails,
  editDetails,
  updateDetails,
  deleteDetails,
};
