import Chat from "components/Chat";
import { ChatContextProvider } from "context/ChatContext";
import Home from "layouts/home/home.layout";
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Routers = () => {
    return (
        <BrowserRouter>
            <ChatContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </ChatContextProvider>
        </BrowserRouter>
    )
}

export default Routers;