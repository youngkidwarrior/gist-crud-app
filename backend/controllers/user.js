const User = require('../models/User');

exports.createUser = (req, res, next) => {
  console.log(req.body);
  const User = new User({
    username: req.body.username,
    password: req.body.password
  });
  User
    .save()
    .then(createdUser => {
      res.status(201).json({
        message: 'User added succesfully',
        User: {
          ...createdUser,
          id: createdUser._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Creating a User failed'
      });
    });
};

exports.login = (req, res, next) => {
  User.FindOne({
    username: req.body.username,
    password: req.body.password
  })
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: 'user not found!'
        });
      }
    })
}


// exports.deleteUser = (req, res, next) => {
//   User.findOne({
//     _id: req.params.id
//   }),
//     function(err, User) {
//       console.log(User);
//     };
//
//   User.deleteOne({
//     _id: req.params.id
//   })
//     .then(result => {
//       if (result.n > 0) {
//         res.status(200).json({
//           message: 'User deleted'
//         });
//       } else {
//         res.status(401).json({
//           message: 'Not authorized'
//         });
//       }
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: 'Not authorized'
//       });
//     });
// };
