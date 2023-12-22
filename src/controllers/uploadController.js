const uploadS3= require("../service/s3");
const db = require("../models/uploadModel");


const uploadFile = async (req, res) => {
    console.log(req.files,5);
    const message = req.body.message;
    const results = [];
    const cdn = process.env.AWS_CLOUDFRONT_URL;
    let cdnUrls = " ";

    try{
        if (!message && req.files.length === 0){
            res.status(400).json({
                "error": true,
                "message": "訊息和檔案欄位不能都為空"
            });
        } else {
            if(message){
                console.log(message);
            };

            if(req.files.length > 0){
                for (const file of req.files) {
                    const result = await uploadS3(file);
                    console.log(result)
                    const insertdata = (key) =>{

                        return result[key];
                    };

                    cdnUrls = cdn + insertdata("Location").split("com")[1],
                    
                    results.push(cdnUrls);
                }
            };

            await db.insertDatas(message,cdnUrl);
            res.status(200).json({ 
                "files": results , 
                "message":message
            });
        }
    }catch(err){
        console.error(err);
        res.status(500).json({
            "error": true,
            "message": "伺服器內部錯誤",
            "errorDetails": err.message
        });
    }
};

module.exports = { uploadFile };