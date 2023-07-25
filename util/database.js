// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "",
// });

// module.exports = pool.promise();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// testConnection();
module.exports = sequelize;
