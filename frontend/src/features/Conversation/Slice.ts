import { createSlice, PayloadAction, nanoid, Dispatch } from "@reduxjs/toolkit"
import { RootState } from "@app/store"
import { IConversationState } from "./Type"

export const ConversationSlice = createSlice({
  name: "conversation",
  initialState: [] as IConversationState[],
  reducers: {
    add: {
      reducer: (state, action: PayloadAction<IConversationState>) => {
        state.push(action.payload)
      },
      prepare: (text: string) => {
        const id = nanoid()
        const time = new Date().toLocaleString()
        const sent = Boolean(Math.floor(Math.random() * 2))
        return {
          payload: {
            id,
            text,
            time,
            sent,
          },
        }
      },
    },
    remove: (state, action: PayloadAction<IConversationState["id"]>) => {
      state.splice(
        state.findIndex((conversation) => conversation.id === action.payload),
        1
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = ConversationSlice.actions

export const selectConversation = (state: RootState) => state.conversation

export default ConversationSlice.reducer
