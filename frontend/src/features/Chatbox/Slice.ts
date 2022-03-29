import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@app/store"
import { users } from "@api/get-contact";
import { IUserListState } from "./Type";

export const UserListSlice = createSlice({
  name: "userList",
  initialState: users,
  reducers: {
    add: {
      reducer: (state, action: PayloadAction<IUserListState>) => {
        state.push(action.payload)
      },
      prepare: (nickName: string, quote: string) => {
        return {
          payload: {
            userId: Math.floor(Math.random() * 9).toString(),
            icon: "",
            nickName,
            quote
          },
        }
      },
    },
    remove: (state, action: PayloadAction<IUserListState["userId"]>) => {
      state.splice(
        state.findIndex((user) => user.userId === action.payload),
        1
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = UserListSlice.actions

export const selectUserList = (state: RootState) => state.userList

export default UserListSlice.reducer
