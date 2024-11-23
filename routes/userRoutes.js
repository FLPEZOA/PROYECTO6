const express = require('express');
const { register, login, verifyToken, update, deleteUser } = require('../controllers/userController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Rutas de usuario
router.post('/register', register);
router.post('/login', login);
router.get('/verifytoken', authenticate, verifyToken);
router.put('/update', authenticate, update);
router.delete('/delete/:id', authenticate, deleteUser);

module.exports = router;
