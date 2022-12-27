import { ChatContext } from 'context/ChatContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from 'socket';
import * as s from './home.layout.styles';

const Home = () => {
    const [username, setUsername] = useState("");
    const [contact, setContact] = useState("");
    const navigate = useNavigate();
    const [logged, setLogged] = useState(false);
    const { setRoom, setUsername: changeUsername } = useContext(ChatContext);

    useEffect(() => {
        logged && socket.on("return_messages", data => {
            setRoom(data.room)
        })

    }, [logged, setRoom])

    const login = () => {
        if (!!username) {
            setLogged(true);
            changeUsername(username)
        }
    }

    const joinRoom = () => {
        if (!!contact) {
            const room = [username, contact];
            socket.emit("join_chat", room);
            navigate("/chat");
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