const User = require('../models/user.model.js');

// create and save a new user
exports.create = (req, res) => {
  // validate request
  if(!req.body.username){
    return res.status(400).send({
      message: "username can not be empty"
    });
  }
  if(!req.body.password){
    return res.status(400).send({
      message: "user password can not be empty"
    });
  }

  // create a user
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    is_admin: !User.find().length ? true : false
  });

  // save user to database
  user.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occured while creating the user."
      });
    });
};

exports.validate = (req, res) => {

  if(!req.body.username){
    return res.status(400).send({
      message: "username can not be empty"
    });
  }
  if(!req.body.password){
    return res.status(400).send({
      message: "user password can not be empty"
    });
  }

  User.find({username: req.body.username, password: req.body.password})
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(404).send({
        message: err.message || "cannot find user with these credentials"
      })
    })
}

// retrieve and return all users from the database
exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "some error occured while retrieving users."
      });
    });
};

// find a single user with userId
exports.findOne = (req, res) => {
  User.findById(req.params.userId)
    .then(user => {
      if(!user) {
        return res.status(404).send({
          message: "user not found with id " + req.params.userId
        });
      }
      res.send(user);
    }).catch(err => {
      if(err.kind === "ObjectId") {
        return res.status(404).send({
          message: "user not found with id " + req.params.userId
        });
      }
      return res.status(500).send({
        message: "error retrieving user with id: " + req.params.userId
      });
    });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        title: req.body.title || "Untitled User",
        content: req.body.content
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};
