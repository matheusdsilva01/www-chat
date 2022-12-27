import { createContext, ReactNode, useState } from "react";

type ChatContextType = {
    username: string;
    room: string;
    setUsername: (user: string) => void;
    setRoom: (user: string) => void;
};

type ChatContextProps = {
    children: ReactNode;
}
export const ChatContext = createContext({} as ChatContextType);


export const ChatContextProvider = ({ children }: ChatContextProps) => {
    const [room, setRoom] = useState("");
    const [username, setUsername] = useState("");

    return (
        <ChatContext.Provider value={{ username, setUsername, room, setRoom }}>
            {children}
        </ChatContext.Provider>
    )
}  