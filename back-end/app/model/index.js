const { Sequelize } = require("sequelize");
const {HOST, USER, PASSWORD, DB, dialect} = require("../configs/db.config");
const { createStudentModel } = require("../model/student.model");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
});

// tạo model
const Student = createStudentModel(sequelize);

module.exports = {
    sequelize,
    Student,
};