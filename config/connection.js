 var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "",
//   password: "",
//   database: ""
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;

var connection;
if(process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  
    connection = mysql.createConnection({
      root: 3306,
      host: "qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "axmioyrgfd74avz3",
      password: "ybj35pt7v4cj1s9u",
      database: "kzu4tu6daugpxtky",
    });
};