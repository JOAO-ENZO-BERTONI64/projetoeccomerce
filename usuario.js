const sequelize = require('sequelize')
const sequelize = require('sequelize')
const connection = require('./database')

const usuario = connection.define('subusuario', {

type: sequelize.INTEGER
primary key: true
allow null: false
});