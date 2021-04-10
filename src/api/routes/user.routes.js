const { Router } = require('express');
const route = Router();
const { logUser } = require('../middlewares');
const { UserService } = require('../../services');
const sequelize = require('../../models');

const { User } = sequelize.models;
const userService = new UserService(sequelize);

module.exports = (router) => {
    router.use('/user', [logUser.printUserToConsole], route);

    route.get('/', (req, res) => {
        return res.status(200).json({
            message: 'base dari /user',
        });
    });

    route.get('/profile', (req, res) => {
        return res.status(200).json({
            name: 'reynard',
            npm: 1806191175,
        });
    });

    route.post('/create', async (req, res) => {
        try {
            const userModel = User.build({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            });
            const user = await userService.createUser(userModel);
            return res.status(200).json({ user });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });
};
