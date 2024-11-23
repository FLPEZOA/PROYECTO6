const express = require('express');
const { create, readAll, readOne, update, deleteProduct } = require('../controllers/productController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Rutas de producto
router.post('/create', authenticate, create);
router.get('/readall', readAll);
router.get('/readone/:id', readOne);
router.put('/update/:id', authenticate, update);
router.delete('/delete/:id', authenticate, deleteProduct);

module.exports = router;
