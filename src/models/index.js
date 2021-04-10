const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('applicant_db', 'postgres', 'kingdom2', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

const modelDefiners = [require('./user.model')];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

sequelize.sync({force: true});

module.exports = sequelize;
