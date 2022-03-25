import { createSlice, PayloadAction, nanoid, Dispatch } from "@reduxjs/toolkit"
import { RootState } from "@app/store"
import { IConversationState } from "./State"

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
        const sent = true
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

// export const selectActionReducer =
//   (buttonName: string, conversationItemId: ConversationState["id"]) =>
//   (dispatch: Dispatch<any>) => {
//     switch (buttonName) {
//       case conversationItemAction.delete:
//         return dispatch(removeconversation(conversationItemId))
//       case conversationItemAction.completed:
//         return dispatch(completedconversation(conversationItemId))
//       default:
//         return alert("Invalid Action")
//     }
//   }

export default ConversationSlice.reducer
