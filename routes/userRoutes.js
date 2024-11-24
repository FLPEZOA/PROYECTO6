const express = require('express');  // Asegúrate de importar express
const {
    register,
    login,
    verifyToken,
    update,
    deleteUser
} = require('../controllers/userController');  // Asegúrate de que las funciones se importen correctamente

const { authenticate } = require('../middleware/auth');

const router = express.Router(); // Asegúrate de definir el router aquí

// Rutas de usuario
router.post('/register', register);
router.post('/login', login);
router.get('/verifytoken', authenticate, verifyToken);
router.put('/update', authenticate, update);
router.delete('/delete/:id', authenticate, deleteUser); // Asegúrate de que esta ruta está definida

module.exports = router;  // Exporta el router al final
