import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          email,
          password,
        }
      );

      console.log("response: ", response);

      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.log("AxiosError!!!: ", error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loadingUser: false,
    currentUser: {},
    isAuth: false,
    errorUser: null,
  },
  reducers: {
    logOut: (state) => {
      localStorage.clear("token");
      state.currentUser = {};
      state.isAuth = false;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(userLogin.pending, (state) => {
        state.loadingUser = true;
        state.errorUser = null;
        state.isAuth = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loadingUser = false;
        state.currentUser = action.payload;
        state.isAuth = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        console.log("action: ", action);
        state.loadingUser = false;
        state.isAuth = false;
        state.errorUser = action.payload;
      });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
