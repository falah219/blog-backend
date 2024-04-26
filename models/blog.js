'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blog.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    publication: DataTypes.STRING,
    category: DataTypes.STRING,
    published_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};