const { WorkshopPresenter } = require('../models/workshopPresenter-model');
const bcrypt = require('bcrypt');

const SignUp = async (req, res, next) => {
  const { name, email, password, phone, title, date, url } = req.body;
  WorkshopPresenter.find({ email: email })
    .exec()
    .then((workshopPresenter) => {
      if (workshopPresenter.length >= 1) {
        return res.status(200).json({
          message: 'Email is already used. Please try again.',
        });
      } else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const workshopPresenter = new WorkshopPresenter({
              name: name,
              email: email,
              password: hash,
              phone: phone,
              proposal: {
                title: title,
                date: date,
                url: 'https://firebasestorage.googleapis.com/v0/b/icaf-project.appspot.com/o/documents%2FY3.S2.WE.SE.36.02.pdf?alt=media&token=ad1151b0-9742-4a2f-af0c-f2282f81a4f2',
              },
            });
            workshopPresenter
              .save()
              .then((result) => {
                console.log(result);
                res.status(200).json({
                  message: 'Successfully Registered',
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
};

exports.SignUp = SignUp;
