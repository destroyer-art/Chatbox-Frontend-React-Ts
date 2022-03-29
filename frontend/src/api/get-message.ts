import { IConversationState } from "@features/Conversation/Type";

export const getHistory = async (): Promise<IConversationState[]> => await (
  await fetch("http://localhost:7070/api/conversations")
).json();
