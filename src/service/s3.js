require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");
const uuid = require("uuid").v4;
const sharp = require("sharp");

const bucketName = process.env.AWS_BUCKETNAME;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;


const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
});

const uploadS3 = async(file) => {

    const buffer = await sharp(file.buffer).resize({height: 1920, width: 1080, fit: "contain"}).toBuffer();

    const uploadParams = {
        Bucket: bucketName,
        Key: `uploads/${uuid()}-${file.originalname}`,
        Body: buffer,
    }

    const result = await s3.upload(uploadParams).promise();

    return result;
}

module.exports = uploadS3 ;