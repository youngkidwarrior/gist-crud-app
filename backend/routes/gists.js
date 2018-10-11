const express = require('express');
const fs = require('fs');
const router = express.Router();
const GistsController = require('../controllers/gists');


router.post('', GistsController.createGist);

router.get('/:id', GistsController.getGist);

router.put('/:id', GistsController.updateGist);

router.get('', GistsController.getAllGists);

router.delete('/:id', GistsController.deleteGist);

module.exports = router;
