import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  helpers: JSON.parse(localStorage.getItem("helperDetails")) || [],
  helperDays: JSON.parse(localStorage.getItem("helperDays")) || [],
  helperJobPreferences: JSON.parse(localStorage.getItem("helperPref")) || [],
};

const helperSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    addHelperDetails(state, action) {
      state.helpers.push({
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        mobile: action.payload.mobile,
      });
      localStorage.setItem("helperDetails", JSON.stringify(state.helpers));
    },
    addHelperDays(state, action) {
      state.helperDays.push(action.payload);
      localStorage.setItem("helperDays", JSON.stringify(state.helperDays));
    },
    addHelperJobPreferences(state, action) {
      state.helperJobPreferences.push(action.payload);
      localStorage.setItem(
        "helperPref",
        JSON.stringify(state.helperJobPreferences)
      );
      console.log(current(state.helperJobPreferences));
    },
  },
});

export const helperActions = helperSlice.actions;
export default helperSlice.reducer;
