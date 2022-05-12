import { RootState } from "@app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUser {
  username: string;
  token: string;
}
const initialState: IUser =
{
  username: "",
  token: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        ...action.payload
      }
    },
    unset: () => {
      return {
        ...initialState
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { set, unset } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
