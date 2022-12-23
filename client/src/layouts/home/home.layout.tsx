import { useState } from 'react';
import { io } from 'socket.io-client';
import * as s from './home.layout.styles';

const socket = io("http://localhost:3001")

const Home = () => {
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState(12354);

    const joinChat = () => {
        if (!!username) {
            socket.emit("join_chat", room)
        }
    }

    return (
        <s.Container>
            <s.ContainerLogin>
                <s.Section>
                    <s.Title>WWW-CHAT</s.Title>
                    <s.Input type="text" onChange={(event) => setUsername(event.target.value)} placeholder="Your username" />
                    {/* <input type="text" onChange={(event) => setContact(event.target.value)} placeholder="Your contact" /> */}
                </s.Section>
                <s.Button onClick={joinChat}>Login</s.Button>
            </s.ContainerLogin>
        </s.Container>
    )
}

export default Home;