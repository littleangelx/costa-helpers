import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  helperJobs: JSON.parse(localStorage.getItem("helperJobs")) || [],
};

const allocationSlice = createSlice({
  name: "allocation",
  initialState,
  reducers: {
    initiateHelper(state, action) {
      state.helperJobs.push({
        helperId: action.payload.helperId,
        helperName: action.payload.helperName,
        wed: {
          9: action.payload.wedAm ? null : false,
          10.3: action.payload.wedAm ? null : false,
          11.45: action.payload.wedAm ? null : false,
          12: action.payload.wedPm ? null : false,
          13.3: action.payload.wedPm ? null : false,
          16.45: action.payload.wedPm ? null : false,
        },
        thurs: {
          9: action.payload.thursAm ? null : false,
          10.3: action.payload.thursAm ? null : false,
          11.45: action.payload.thursAm ? null : false,
          12: action.payload.thursPm ? null : false,
          13.3: action.payload.thursPm ? null : false,
          16.45: action.payload.thursPm ? null : false,
        },
        fri: {
          9: action.payload.friAm ? null : false,
          10.3: action.payload.friAm ? null : false,
          11.45: action.payload.friAm ? null : false,
          12: action.payload.friPm ? null : false,
          13.3: action.payload.friPm ? null : false,
          16.45: action.payload.friPm ? null : false,
        },
      });
      localStorage.setItem("helperJobs", JSON.stringify(state.helperJobs));
    },
    addJob(state, action) {
      const foundHelper = state.helperJobs.filter(
        (helper) => helper.helperId == action.payload.helperId
      )[0];
      foundHelper[action.payload.day][Number(action.payload.startTime)] =
        action.payload.jobName;
    },
  },
});

export const allocationActions = allocationSlice.actions;
export default allocationSlice.reducer;
