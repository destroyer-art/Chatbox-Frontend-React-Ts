import { io } from "socket.io-client";

export const socket = io("http://localhost:6869/", {
  extraHeaders: {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhd2lkIiwiaWF0IjoxNjQ5NjYzMTk2LCJleHAiOjE2NDk4MzU5OTZ9.jiCoLAeYb9vvzM9F5HSI5L1zhALfHMsz2UUVCHOORpk',
  }
});
