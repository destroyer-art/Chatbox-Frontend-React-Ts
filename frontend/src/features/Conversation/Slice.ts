import { createSlice, PayloadAction, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "@app/store"
import { IConversationState } from "./Type"
import { getConversationHistory } from "@api/get-message"


export const fetchHistory = createAsyncThunk(
  'conversation/fetchHistory',
  async (token: string) => await getConversationHistory(token)
)

const initialState = [] as IConversationState[]

export const ConversationSlice = createSlice({
  name: "conversation",
  initialState,
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
    reset: () => {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const { add, remove, reset } = ConversationSlice.actions

export const selectConversation = (state: RootState) => state.conversation

export default ConversationSlice.reducer
