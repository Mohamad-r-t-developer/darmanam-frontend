
import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3000", {
      transports: ["websocket"],
      withCredentials: true,
    });
  }
  return socket;
};
