//importing the modules
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

//creating the instances
const app = express();
const server = http.createServer(app);
const io = new Server(server);


// serving the html files
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get('/', (req, res) => res.sendFile(join(__dirname, 'index.html')))


// create the socket connection
io.on("connection", (socket) => {
    console.log("User connected successfully");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    })
})
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})
