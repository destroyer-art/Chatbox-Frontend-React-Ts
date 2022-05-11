import { io } from "socket.io-client";
import { socketUrl } from "./constant";

export function runSocket(token: string) {
  return io(socketUrl, {
    extraHeaders: {
      authorization: token,
    }
  });
}
