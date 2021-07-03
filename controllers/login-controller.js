const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Researcher } = require('../models/researcher-model');
const { WorkshopPresenter } = require('../models/workshopPresenter-model');

const LogIn = async (req, res, next) => {
    let researcher = await Researcher.find({ email: req.body.email });
//   User.find({ email: req.body.email })
//     .exec()
//     .then((user) => {
//       if (user.length < 1) {
//         return res.status(200).json({
//           message: 'Email not found, User does not exit',
//         });
//       }
//       bcrypt.compare(req.body.password, user[0].password, (err, result) => {
//         if (err) {
//           return res.status(200).json({
//             message: 'Login failed',
//           });
//         }
//         if (result) {
//           const token = jwt.sign(
//             {
//               email: user[0].email,
//               userId: user[0]._id,
//             },
//             '' + process.env.JWT_KEY,
//             {
//               expiresIn: '1h',
//             }
//           );
//           console.log(user);
//           return res.status(200).json({
//             message: 'Login successful',
//             user: user,
//             token: token,
//           });
//         }
//         res.status(200).json({
//           message: 'Login failed',
//         });
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         error: err,
//       });
//     });
};

exports.LogIn = LogIn;