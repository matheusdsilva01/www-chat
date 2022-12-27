import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import db from "./util/db.json";
import { encrypt } from "./util/encrypt";

const app = express();
app.use(cors);
const port = process.env.PORT || 3001;

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    methods: ["GET", "POST"],
  },
});

const createChat = (room: string) => {
  let chat = {
    room,
    messages: [
      {
        message: "Welcome to WWW-chat",
        time: "21:09",
        author: "Matheus",
      },
    ],
  };
  db.push(chat);
};

io.on("connection", (socket) => {
  socket.on("join_chat", (data) => {
    const room = encrypt(data);
    const roomExists = db.filter((chat) => chat.room === room).length > 0;
    console.log(room);
    socket.join(room);
    if (!roomExists) {
      createChat(room);
    }

    const chat = db.find((chat) => chat.room === room);
    socket.emit("return_messages", chat);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });

  // disconnect
  socket.on("disconnect", () => {
    console.log("Closed connection", socket.id);
  });
});
serverHttp.listen(port, () => console.log("Server is running"));
export { io };
