const Product = require('../models/productModel');

// Crear un producto
exports.create = async (req, res) => {
    const product = new Product({ ...req.body, user: req.user.id });
    await product.save();
    res.status(201).send(product);
};

// Leer todos los productos
exports.readAll = async (req, res) => {
    const products = await Product.find();
    res.send(products);
};

// Leer un producto específico
exports.readOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }
        res.send(product);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Actualizar un producto
exports.update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }
        res.send(product);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send('Producto no encontrado');
        }
        res.send('Producto eliminado');
    } catch (err) {
        res.status(400).send(err);
    }
};
