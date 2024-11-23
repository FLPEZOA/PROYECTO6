const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Registrar un usuario
exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
};

// Iniciar sesión
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !(await user.comparePassword(req.body.password))) {
            return res.status(400).send('Credenciales incorrectas');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.send({ user, token });
    } catch (err) {
        res.status(400).send(err);
    }
};

// Verificar token
exports.verifyToken = (req, res) => {
    res.send('Token verificado');
};

// Actualizar información del usuario
exports.update = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
        res.send(user);
    } catch (err) {
        res.status(400).send(err);
    }

};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.send('Usuario eliminado');
    } catch (err) {
        res.status(400).send(err);
    }
};
