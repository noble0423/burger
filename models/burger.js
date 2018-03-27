// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // cols and values are arrays
    create: function(cols, vals, cb) {
        console.log(cols);
        console.log(vals);
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    // update: function(objColVals, condition, cb) {
    //     orm.update("burgers", objColVals, condition, function(res) {
    //         cb(res);
    //     });
    // }
};


// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;