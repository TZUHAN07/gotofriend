const mongoose = require("../connection/db");

const uploadSchema = new mongoose.Schema({
    message:{
        type: String,
    },

    files: [String],

},{ timestamps: true });

const UploadSchema = mongoose.model("UploadSchema" ,uploadSchema);

const insertDatas = async (message, cdnUrls) => {
    try {
        const newUploadDatas = new UploadSchema({
            message,
            files: cdnUrls, 
        });

        await newUploadDatas.save();

        console.log("Upload saved successfully!");
    } catch (error) {
        console.error("Error saving message:", error);
        throw error;
    }
};

module.exports = { UploadSchema , insertDatas };