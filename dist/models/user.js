'use strict';
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            User.belongsTo(models.Role, {
                foreignKey: "role_user",
                targetKey: "code",
                as: "roleData",
            });
            // User.hasMany(models.Comment, {
            //   foreignKey: 'userId'
            // })
            User.belongsToMany(models.Movie, {
                through: models.Comment
            });
        }
    }
    User.init({
        name: {
            type: DataTypes.STRING
        },
        gender: { type: DataTypes.STRING },
        birthday: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.INTEGER },
        role_user: { type: DataTypes.INTEGER },
        address: { type: DataTypes.STRING },
        avatar: { type: DataTypes.STRING },
        refreshToken: { type: DataTypes.STRING },
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
