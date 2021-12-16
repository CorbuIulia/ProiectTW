const sequelize = require('../sequelize.js');
const { DataTypes } = require('sequelize');


//cursul adaugat de profesor
const Course=sequelize.define('course',{
    id:{
        type:DataTypes.INTEGER,
       // defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 200]
        }
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 200]
        }

    }
    // start:{
    //     type:DataTypes.DATE,
    //     get() {
    //         return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
    //     }
    // } ,
    // stop:{
    //     type:DataTypes.DATE,
    //     get() {
    //         return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
    //     }
    //}

})
module.exports=Course;