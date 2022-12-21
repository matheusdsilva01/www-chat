import { serverHttp } from "./http";

const port = 8080;

serverHttp.listen(port, () => console.log("Server is running"));
