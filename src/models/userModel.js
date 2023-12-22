const mongoose = require("../connection/db");
// const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
    },

    email:{
        type: String,
        required:true,
        unique:true,
    },

    password:{
        type: String,
        required:true,
    },

    profileImage:{
        type: String,
    },

    bio: {
        type: String,
    },

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
},{ timestamps: true });

console.log("success table");

module.exports = mongoose.model("User", userSchema);