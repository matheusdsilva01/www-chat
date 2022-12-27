import { ChatContext } from 'context/ChatContext';
import { useContext, useEffect, useState } from 'react';
import { socket } from 'socket';


const Chat = () => {
    const [message, setMessage] = useState("");
    const { room, username } = useContext(ChatContext);

    useEffect(() => {
        socket.on("return_messages", (data) => console.log(data))
    }, [])

    useEffect(() => {
        socket.on("receive_message", (data: any) => {
            console.log(data)
        })
    }, [])

    const sendMessage = () => {
        const time = `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, "0")} `;
        const dataMessage = {
            message,
            time,
            username,
            room
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