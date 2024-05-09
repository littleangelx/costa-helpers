import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  jobAllocation: JSON.parse(localStorage.getItem("jobAllocation")) || {
    wed: {},
    thurs: {},
    fri: {},
  },
};

const allocationJobSlice = createSlice({
  name: "allocationJob",
  initialState,
  reducers: {
    addHelper(state, action) {
      if (!state.jobAllocation[action.payload.day][action.payload.jobName]) {
        state.jobAllocation[action.payload.day][action.payload.jobName] = [];
      }

      if (
        !state.jobAllocation[action.payload.day][
          action.payload.jobName
        ].includes(action.payload.helperName)
      ) {
        state.jobAllocation[action.payload.day][action.payload.jobName].push(
          action.payload.helperName
        );
      }

      console.log(current(state.jobAllocation));
      localStorage.setItem(
        "jobAllocation",
        JSON.stringify(state.jobAllocation)
      );
    },

    removeHelper(state, action) {
      state.jobAllocation[action.payload.day][action.payload.jobName] =
        state.jobAllocation[action.payload.day][action.payload.jobName].filter(
          (helper) => helper !== action.payload.helperName
        );
      console.log(current(state.jobAllocation));
      localStorage.setItem(
        "jobAllocation",
        JSON.stringify(state.jobAllocation)
      );
    },
  },
});

export const allocationJobActions = allocationJobSlice.actions;
export default allocationJobSlice.reducer;
