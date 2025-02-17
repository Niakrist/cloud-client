import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    isAuth: false,
  },
  reducers: {},
  extraReducers: (buider) => {},
});

export default userSlice.reducer;
