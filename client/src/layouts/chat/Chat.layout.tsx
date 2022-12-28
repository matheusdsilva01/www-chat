import { ChatContext } from 'context/ChatContext';
import { useContext, useEffect, useRef, useState } from 'react';
import { socket } from 'socket';
import * as s from "./chat.layout.styles";

type Message = {
    message: string;
    time: string;
    author: string;
    room: string;
}

type ReturnMessages = {
    room: string;
    messages: Message[]
}

const Chat = () => {
    const [message, setMessage] = useState("");
    const [listMessages, setListMessages] = useState<Message[]>([]);
    const { room, username } = useContext(ChatContext);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        socket.on("return_messages", (data: ReturnMessages) => setListMessages(data.messages))
    }, [])

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [listMessages])

    useEffect(() => {
        socket.on("receive_message", (data: Message) => {
            setListMessages(oldMessages => [...oldMessages, data])
        })
        return () => { socket.removeListener('receive_message') }
    }, [])

    const sendMessage = () => {
        const time = `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, "0")} `;
        const dataMessage = {
            message,
            time,
            author: username,
            room
        }
        setListMessages(oldMessages => [...oldMessages, dataMessage])
        socket.emit("send_message", dataMessage)
    }
    return (
        <s.Container>
            <s.ContainerChat>
                <s.ChatHeader>WWW-Chat</s.ChatHeader>
                <s.ChatBody>
                    <s.MessagesContainer ref={bottomRef}>
                        {listMessages.map(({ message, time, author }, index) => (
                            <s.Message key={index} usernameIsAuthor={author === username}>
                                <div>
                                    <s.MessageContent usernameIsAuthor={author === username} >
                                        <p>{message}</p>
                                    </s.MessageContent>
                                    <s.MessageMeta usernameIsAuthor={author === username}>
                                        <p>{time}</p>
                                        <s.Author>{author}</s.Author>
                                    </s.MessageMeta>
                                </div>
                            </s.Message>
                        ))}
                    </s.MessagesContainer>
                </s.ChatBody>
                <s.ChatFooter>
                    <s.Input type="text" onChange={(event) => setMessage(event.target.value)} />
                    <s.ChatButtonSubmit onClick={sendMessage}><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xmlSpace="preserve"><path fill="#fff" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg></s.ChatButtonSubmit>
                </s.ChatFooter>
            </s.ContainerChat>
        </s.Container>
    )
}

export default Chat