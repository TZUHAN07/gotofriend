const mongoose = require("mongoose");
const dbUri = process.env.DB_URI;
console.log('DB_URI:', dbUri);

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(dbUri, connectionParams);

mongoose.connection.once("open", () => {
    console.log("Connected to database!")
});

mongoose.connection.on("error", (error) => {
    console.log("Database error" , error.message)
});

module.exports = mongoose;