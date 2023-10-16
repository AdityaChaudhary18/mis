const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mis", "root", "ayush26", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Contact = require("./contact")(sequelize, Sequelize, DataTypes);

module.exports = db;
