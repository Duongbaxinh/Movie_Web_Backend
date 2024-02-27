'use strict';
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Role extends sequelize_1.Model {
    }
    Role.init({
        code: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    }, { sequelize,
        modelName: 'Role',
    });
    return Role;
};
