const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define(
        'User',
        {
            username: {
                type: DataTypes.STRING,
                validate: {
                    isAlphanumeric: true,
                },
            },
            email: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
        },
        {
            schema: 'applicants',
            tableName: 'users',
        }
    );
};
