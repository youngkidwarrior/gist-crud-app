const express = require('express');
const fs = require('fs');
const router = express.Router();
const UserController = require('../controllers/user');


router.post('', UserController.createUser);

router.post('/login', UserController.login);

module.exports = router;
