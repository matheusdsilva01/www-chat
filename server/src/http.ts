import express from "express";
import http from "http";
import { Server } from "socket.io";

//server
const app = express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export { serverHttp, io };
