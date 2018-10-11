const Gist = require('../models/gist');

exports.createGist = (req, res, next) => {
  console.log(req.body);
  const gist = new Gist({
    title: req.body.title,
    content: req.body.content
  });
  gist
    .save()
    .then(createdGist => {
      res.status(201).json({
        message: 'Gist added succesfully',
        gist: {
          ...createdGist,
          id: createdGist._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Creating a gist failed'
      });
    });
};

exports.getGist = (req, res, next) => {
  Gist.findById(req.params.id)
    .then(gist => {
      if (gist) {
        res.status(200).json(gist);
      } else {
        res.status(404).json({
          message: 'gist not found!'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching gist failed'
      });
    });
};

exports.getAllGists = (req, res, next) => {
  const gistQuery = Gist.find();
  let fetchedgists;
  gistQuery
    .then(documents => {
      fetchedgists = documents;
      return Gist.count();
    })
    .then(count => {
      res.status(200).json({
        message: 'gists fetched succesfully',
        gists: fetchedgists
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching gists failed'
      });
    });
};

exports.updateGist = (req, res, next) => {
  const gist = new Gist({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Gist.updateOne(
    {
      _id: req.params.id
    },
    gist
  )
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({
          message: 'Update successful!'
        });
      } else {
        res.status(401).json({
          message: 'Not Authorized'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't update gist"
      });
    });
};

exports.deleteGist = (req, res, next) => {
  Gist.findOne({
    _id: req.params.id
  }),
    function(err, gist) {
      console.log(gist);
    };

  Gist.deleteOne({
    _id: req.params.id
  })
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({
          message: 'gist deleted'
        });
      } else {
        res.status(401).json({
          message: 'Not authorized'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Not authorized'
      });
    });
};
