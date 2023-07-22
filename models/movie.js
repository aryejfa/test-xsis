'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => { 
  var movie = sequelize.define('movie', { 
    title:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { 
        notNull: {
          msg: 'Please enter your title'
        }
      }
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false, 
      validate: { 
        notNull: {
          msg: 'Please enter your description'
        }
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false, 
      validate: { 
        isFloat: true, 
        notNull: {
          msg: 'Please enter your rating'
        },
        isEven(value) {
          if (typeof value === 'string') {
            throw new Error('Invalid Input Rating');
          }
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: { 
        notNull: {
          msg: 'Please enter your image'
        }
      }
    },
    created_at:{
      type: DataTypes.DATE,
      allowNull: false, 
      validate: { 
        notNull: {
          msg: 'Please enter your created_at'
        }
      }
    },
    updated_at:{
      type: DataTypes.DATE,
      allowNull: false, 
      validate: { 
        notNull: {
          msg: 'Please enter your created_at'
        }
      }
    }
   }, {
    timestamps: false, //delete default timestampt sequlize
    createdAt: false, 
    updatedAt: false,
    sequelize,
    modelName: 'movie',
  }); 

  return movie;
};