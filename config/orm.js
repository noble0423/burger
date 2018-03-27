// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        // var queryString = "INSERT INTO " + table + " (" + cols + ") " + "VALUES (" + vals + ") ";

        var queryString = "INSERT INTO ?? (??) VALUES (?);";

        connection.query(queryString, [cols, vals], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // update: function(table, objColVals, condition, cb) {
    //     var queryString = "UPDATE ?? SET ?? WHERE ??;";
        
    //     connectgion.query(queryString, [objColVals, condition], function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result);
    //     });
    // }
};

module.exports = orm;