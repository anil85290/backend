const currentDateTime = new Date();
const formattedDateTime = currentDateTime.toLocaleString();


const Sequelize = require('sequelize');
const sequelize = require('../helper/database');

const ReturnedBooks = sequelize.define('returnedbook', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    fine: Sequelize.STRING,
    date: Sequelize.STRING,
}
);

module.exports = ReturnedBooks;