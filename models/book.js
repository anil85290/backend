


const Sequelize = require('sequelize');
const sequelize = require('../helper/database');

const Books = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    date: Sequelize.STRING,
    futuredate: Sequelize.STRING,
}
);

module.exports = Books;