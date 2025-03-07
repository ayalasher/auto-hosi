import { createSlice, configureStore } from "@reduxjs/toolkit";

// Creating the store
const userdataslice = createSlice({
  name: "userdata",
  initialState: {},
  reducers: {
    setuser: (state, action) => {
      return action.payload;
    },
  },
});

// exporting actions
export const { setuser } = userdataslice.actions;

// creating and exporting the store
const store = configureStore({
  reducer: { userdata: userdataslice.reducer },
});

export default store;
