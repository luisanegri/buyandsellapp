const Sequelize = require("sequelize");
const db = require("../db");

const Ad = db.define("ad", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  picture_url: Sequelize.STRING,
  price: Sequelize.INTEGER,
  email: Sequelize.STRING,
  phone_number: Sequelize.INTEGER
});

module.exports = Ad;
