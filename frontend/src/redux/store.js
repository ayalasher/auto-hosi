import { createSlice, configureStore } from "@reduxjs/toolkit";

// Creating the slice
const userdataslice = createSlice({
  name: "userdata",
  initialState: {},
  reducers: {
    setuser: (state, action) => {
      return action.payload;
    },
  },
});

// creating the slice
const patientdataslice = createSlice({
  name: "patientdata",
  initialState: [],
  reducers: {
    setpatientsdata: (state, action) => {
      return action.payload;
    },
  },
});

// exporting actions
export const { setuser } = userdataslice.actions;
export const { setpatientsdata } = patientdataslice.actions;

// creating and exporting the store
const store = configureStore({
  reducer: {
    userdata: userdataslice.reducer,
    patientdata: patientdataslice.reducer,
  },
});

export default store;
