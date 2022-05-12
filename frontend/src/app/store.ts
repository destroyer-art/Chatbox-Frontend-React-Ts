import { configureStore } from "@reduxjs/toolkit"
import conversationReducer from "@features/Conversation/Slice"
import userReducer from "@features/Auth/Slice"
const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    user: userReducer
  },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
