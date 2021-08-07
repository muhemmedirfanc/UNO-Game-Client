import React from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000";

// export const socket = socketIo.connect(SOCKET_URL);
export const socket = io(SOCKET_URL);
export const SocketContext = React.createContext();
