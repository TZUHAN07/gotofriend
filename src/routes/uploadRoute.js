const express = require("express");
const router=express.Router();
const multer = require("multer");
const uploadController = require("../controllers/uploadController");

const storage = multer.memoryStorage();

const fileFilter = (req, file ,cb)=>{
    if(file.mimetype.split("/")[0] === "image"){
        cb(null, true);
    }else{
         cb(new Error("File is not of the correct type"),false);
    }
};
const upload =  multer({
    storage,
    fileFilter,
    limits:{ fileSize: 1000000, files: 10 },
});



router.post("/", upload.array("image"), uploadController.uploadFile);

router.get("/",(req, res)=>{
    res.send();
});


router.delete("/",(req, res)=>{
    res.send();
});

module.exports = router;