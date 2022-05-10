import { IConversationState } from "@features/Conversation/Type";

export const getConversationHistory = async (): Promise<IConversationState[]> => {
  const res = await fetch("http://localhost:7070/api/conversations", {
    headers: new Headers({
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhd2lkIiwiaWF0IjoxNjQ5NjYzMTk2LCJleHAiOjE2NDk4MzU5OTZ9.jiCoLAeYb9vvzM9F5HSI5L1zhALfHMsz2UUVCHOORpk',
      'Content-Type': 'application/json',
    }),
  })

  const data = await res.json()

  return data;
}