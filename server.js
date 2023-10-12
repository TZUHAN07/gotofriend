const app = require("./src/app/app")
const server = require("http").Server(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Listening on ${port}`)
})