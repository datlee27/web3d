import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface INoticafition {
  title: string;
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
}

export interface IAuthState {
  notification?: INoticafition;
}

const initialState: IAuthState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<INoticafition>) => {
      state.notification = action.payload;
    },
    removeNotification: (state) => {
      state.notification = undefined;
    },
    clearStateAuth: () => initialState,
  },
});

export const { removeNotification, setNotification, clearStateAuth } =
  authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
