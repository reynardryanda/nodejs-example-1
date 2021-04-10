const { Router } = require('express');
const { user } = require('./routes');

module.exports = () => {
    const router = Router()
    user(router);
    return router;
}