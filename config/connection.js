// Require mysql
var mysql = require("mysql2");

// Set up our connection information
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "mls_db"
  });
};

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;