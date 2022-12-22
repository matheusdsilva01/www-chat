import { io } from "socket.io-client";

const socket = io("http://localhost:3001")
socket.connect()
function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
