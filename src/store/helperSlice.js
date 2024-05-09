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
    editHelperDetails(state, action) {
      state.helpers = state.helpers.filter(
        (item) => item.id !== action.payload.id
      );
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
      const searchHelper = state.helperDays.filter(
        (helper) => helper.id === action.payload.id
      );

      if (searchHelper.length > 0) {
        state.helperDays = state.helperDays.filter(
          (helper) => helper.id !== action.payload.id
        );
      }
      state.helperDays.push(action.payload);

      localStorage.setItem("helperDays", JSON.stringify(state.helperDays));
    },
    addHelperJobPreferences(state, action) {
      state.helperJobPreferences = state.helperJobPreferences.filter(
        (item) => item.helperId !== action.payload.helperId
      );
      state.helperJobPreferences.push(action.payload);
      localStorage.setItem(
        "helperPref",
        JSON.stringify(state.helperJobPreferences)
      );
    },
  },
});

export const helperActions = helperSlice.actions;
export default helperSlice.reducer;
