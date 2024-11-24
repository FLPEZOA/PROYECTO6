const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).send('Acceso denegado. No se proporcionó token');
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;  // Guarda la información del usuario verificado en `req.user`
        next();  // Llama a la siguiente función de middleware
    } catch (err) {
        res.status(400).send('Token no válido');
    }
};
