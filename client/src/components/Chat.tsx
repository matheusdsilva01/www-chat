import React, { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client';

type ChatProps = {
    socket: Socket;
    username: string;
    room: number
}

const Chat = ({ socket, username, room }: ChatProps) => {
    const [message, setMessage] = useState("");
    const [listMessages, setListMessages] = useState<string[]>([])

    useEffect(() => {
        socket.on("return_messages", (data) => console.log(data))
    }, [socket])

    useEffect(() => {
        socket.on("receive_message", (data: any) => {
            console.log(data)
        })
    }, [socket])

    const sendMessage = () => {
        const time = `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, "0")} `;
        const dataMessage = {
            message,
            time,
            username,
            room: 12354
        }
        socket.emit("send_message", dataMessage)
    }
    return (
        <div>
            <input type="text" onChange={(event) => setMessage(event.target.value)} />
            <button onClick={sendMessage}>Submit message</button>
        </div>
    )
}

export default Chat