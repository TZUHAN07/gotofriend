const app = require("./app/app")
const server = require("http").Server(app);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Listening on ${port}`)
})
