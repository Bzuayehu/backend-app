const express = require('express');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');

const router = express.Router();

router.post('/login', authController.login);
router.get('/users', userController.getUsers);

module.exports = router;
