class UserService {
    constructor(sequelize) {
        this.sequelize = sequelize;
        this.user = sequelize.models.User;
    }

    async createUser(user) {
        try {
            await user.validate();
            return await this.sequelize.transaction(async (transaction) => {
                return await user.save({ transaction });
            });
        } catch (err) {
            throw err;
        }
    }
}

module.exports = UserService;