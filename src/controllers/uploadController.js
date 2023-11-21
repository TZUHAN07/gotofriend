const uploadS3= require("../service/s3");


const uploadFile = async (req, res) => {

    const results = [];

    for (const file of req.files) {

        const result = await uploadS3(file);
        results.push(result);

    }

    return res.json({ status: "success" , results });
};

module.exports = { uploadFile };