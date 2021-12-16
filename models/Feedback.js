const sequelize = require('../sequelize.js');
const { DataTypes } = require('sequelize');

//feedback ul este acordat de catre studenti
const Feedback=sequelize.define('feedback',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true
    },
    emoji:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports=Feedback;