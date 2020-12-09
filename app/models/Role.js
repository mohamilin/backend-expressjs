const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    name: {
        type: String
    }
});

const Role = new mongoose.model("roles", roleSchema);

module.exports = Role;

//versi lain

// 
// const mongoose = require("mongoose");

// const Role = mongoose.model(
//   "Role",
//   new mongoose.Schema({
//     name: String
//   })
// );

// module.exports = Role;

// 