const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'taa.wjtp', {
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize