import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
app.use(cors);

const messages = [
  {
    message: "Hello",
    time: "21:09",
    username: "Matheus",
  },
  {
    message: "Hi, how are you?",
    time: "21:10",
    username: "Matheus",
  },
  {
    message: "Good, and you?",
    time: "21:15",
    username: "Matheus",
  },
];

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join_chat", (data) => {
    socket.join(data);
    socket.emit("return_messages", messages);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  // disconnect
  socket.on("disconnect", () => {
    console.log("Closed connection", socket.id);
  });
});
serverHttp.listen(3001, () => console.log("Server is running"));
export { io };
