import { io } from "socket.io-client";

const urlSocket = process.env.REACT_APP_URL_SOCKET!;

export const socket = io(urlSocket);
