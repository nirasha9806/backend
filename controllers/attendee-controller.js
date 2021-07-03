const { Attendee } = require('../models/attendee-model');
const bcrypt = require('bcrypt');

const SignUp = async (req, res, next) => {
  const { name, email, phone, password } = req.body;
 
  Attendee.find({ email: email })
    .exec()
    .then((attendee) => {
      if (attendee.length >= 1) {
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
            const attendee = new Attendee({
              name: name,
              email: email,
              password: hash,
              phone: phone,
            });
            attendee
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
