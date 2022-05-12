import { IConversationState } from "@features/Conversation/Type";
import { backendUrl } from "./constant";

export const getConversationHistory = async (token: string): Promise<IConversationState[]> => {
  const res = await fetch(`${backendUrl}conversations`, {
    headers: new Headers({
      Authorization: token,
      'Content-Type': 'application/json',
    }),
  })

  const data = await res.json()
  return data;
}