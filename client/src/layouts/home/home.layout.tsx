import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import * as s from './home.layout.styles';

const socket = io("http://localhost:3001")

const Home = () => {
    const [username, setUsername] = useState("");
    const [contact, setContact] = useState("");
    const [logged, setLogged] = useState(false);
    const [room, setRoom] = useState(12354);

    useEffect(() => {
        console.log("here");
        logged && socket.on("return_messages", data => console.log(data))
    }, [logged])

    const login = () => {
        if (!!username) {
            setLogged(true)
        }
    }

    const joinRoom = () => {
        if (!!contact) {
            socket.emit("join_chat", room)
        }
    }

    return (
        <s.Container>
            <s.ContainerLogin>
                <s.Section>
                    <s.Title>WWW-CHAT</s.Title>
                    <s.Input type="text" disabled={logged} onChange={(event) => setUsername(event.target.value)} placeholder="Your username" />
                    {logged && <s.Input type="text" onChange={(event) => setContact(event.target.value)} placeholder="Your contact" />}
                </s.Section>
                {!logged ? (
                    <s.Button onClick={login} disabled={!username}>Login</s.Button>
                ) : (
                    <s.Button onClick={joinRoom} disabled={!contact}>Join room</s.Button>
                )}
            </s.ContainerLogin>
        </s.Container>
    )
}

export default Home;