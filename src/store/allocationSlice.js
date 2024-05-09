import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  helperJobs: JSON.parse(localStorage.getItem("helperJobs")) || [],
  lifts: JSON.parse(localStorage.getItem("lifts")) || {
    wedLifts: [],
    wedLiftsChosen: [],
    wedLiftsSpare: [],
    liftsTripWed: [],
    liftsTripWedSpare: [],
    thursLifts: [],
    thursLiftsChosen: [],
    thursLiftsSpare: [],
    liftsTripThurs: [],
    liftsTripThursSpare: [],
    friLifts: [],
    friLiftsSpare: [],
  },
};

const allocationSlice = createSlice({
  name: "allocation",
  initialState,
  reducers: {
    initiateHelper(state, action) {
      const foundHelper = state.helperJobs.filter(
        (item) => item.helperId === action.payload.helperId
      )[0];
      if (foundHelper) {
        state.helperJobs = state.helperJobs.filter(
          (item) => item.helperId !== action.payload.helperId
        );
      }
      state.helperJobs.push({
        helperId: action.payload.helperId,
        helperName: action.payload.helperName,
        wed: {
          9: action.payload.wedAm ? [] : false,
          10.3: action.payload.wedAm ? [] : false,
          11.45: action.payload.wedAm ? [] : false,
          12: action.payload.wedPm ? [] : false,
          13.3: action.payload.wedPm ? [] : false,
          16.45: action.payload.wedPm ? [] : false,
        },
        thurs: {
          9: action.payload.thursAm ? [] : false,
          10.3: action.payload.thursAm ? [] : false,
          11.45: action.payload.thursAm ? [] : false,
          12: action.payload.thursPm ? [] : false,
          13.3: action.payload.thursPm ? [] : false,
          16.45: action.payload.thursPm ? [] : false,
        },
        fri: {
          9: action.payload.friAm ? [] : false,
          10.3: action.payload.friAm ? [] : false,
          11.45: action.payload.friAm ? [] : false,
          12: action.payload.friPm ? [] : false,
          13.3: action.payload.friPm ? [] : false,
          16.45: action.payload.friPm ? [] : false,
        },
        wedExtra: {
          9: action.payload.wedAm ? [] : false,
          10.3: action.payload.wedAm ? [] : false,
          11.45: action.payload.wedAm ? [] : false,
          12: action.payload.wedPm ? [] : false,
          13.3: action.payload.wedPm ? [] : false,
          16.45: action.payload.wedPm ? [] : false,
        },
        thursExtra: {
          9: action.payload.thursAm ? [] : false,
          10.3: action.payload.thursAm ? [] : false,
          11.45: action.payload.thursAm ? [] : false,
          12: action.payload.thursPm ? [] : false,
          13.3: action.payload.thursPm ? [] : false,
          16.45: action.payload.thursPm ? [] : false,
        },
        friExtra: {
          9: action.payload.friAm ? [] : false,
          10.3: action.payload.friAm ? [] : false,
          11.45: action.payload.friAm ? [] : false,
          12: action.payload.friPm ? [] : false,
          13.3: action.payload.friPm ? [] : false,
          16.45: action.payload.friPm ? [] : false,
        },
      });
      localStorage.setItem("helperJobs", JSON.stringify(state.helperJobs));
    },
    addDefinite(state, action) {
      const foundHelper = state.helperJobs.filter(
        (helper) => helper.helperId == action.payload.helperId
      )[0];

      if (
        action.payload.days.filter((day) => day.value === "wed")[0] &&
        foundHelper["wed"][action.payload.startTime] !== false
      ) {
        foundHelper["wed"][action.payload.startTime].push(
          action.payload.jobName
        );
      }
      if (
        action.payload.days.filter((day) => day.value === "thurs")[0] &&
        foundHelper["thurs"][action.payload.startTime] !== false
      ) {
        foundHelper["thurs"][action.payload.startTime].push(
          action.payload.jobName
        );
      }
      if (
        action.payload.days.filter((day) => day.value === "fri")[0] &&
        foundHelper["fri"][action.payload.startTime] !== false
      ) {
        foundHelper["fri"][action.payload.startTime].push(
          action.payload.jobName
        );
      }
      localStorage.setItem("helperJobs", JSON.stringify(state.helperJobs));
    },
    removeDefinite(state, action) {
      const foundHelper = state.helperJobs.filter(
        (helper) => helper.helperId == action.payload.helperId
      )[0];

      if (foundHelper) {
        foundHelper[action.payload.day][action.payload.startTime] = foundHelper[
          action.payload.day
        ][action.payload.startTime].filter(
          (job) => job !== action.payload.jobName
        );
      }
      localStorage.setItem("helperJobs", JSON.stringify(state.helperJobs));
    },
    removeDefinitePreference(state, action) {
      const foundHelper = state.helperJobs.filter(
        (helper) => helper.helperId == action.payload.helperId
      )[0];

      if (foundHelper) {
        foundHelper["wed"][action.payload.startTime] = foundHelper["wed"][
          action.payload.startTime
        ].filter((job) => job !== action.payload.jobName);
        foundHelper["thurs"][action.payload.startTime] = foundHelper["thurs"][
          action.payload.startTime
        ].filter((job) => job !== action.payload.jobName);
        foundHelper["fri"][action.payload.startTime] = foundHelper["fri"][
          action.payload.startTime
        ].filter((job) => job !== action.payload.jobName);
      }
      localStorage.setItem("helperJobs", JSON.stringify(state.helperJobs));
    },
    addHelperJob(state, action) {
      const foundHelper = state.helperJobs.filter(
        (helper) => helper.helperId == action.payload.helperId
      )[0];
      foundHelper[action.payload.day + "Extra"][action.payload.startTime].push(
        action.payload.jobName
      );

      localStorage.setItem("helperJobs", JSON.stringify(state.helperJobs));
    },
    removeHelperJob(state, action) {
      const foundHelper = state.helperJobs.filter(
        (helper) => helper.helperId == action.payload.helperId
      )[0];
      if (foundHelper) {
        foundHelper[action.payload.day + "Extra"][action.payload.startTime] =
          foundHelper[action.payload.day + "Extra"][
            action.payload.startTime
          ].filter((job) => job !== action.payload.jobName);
      }
      localStorage.setItem("helperJobs", JSON.stringify(state.helperJobs));
    },
    initiateLifts(state, action) {
      if (
        !state.lifts[action.payload.day + "Lifts"].includes(
          action.payload.helperName
        )
      ) {
        state.lifts[action.payload.day + "Lifts"].push(
          action.payload.helperName
        );
      }

      localStorage.setItem("lifts", JSON.stringify(state.lifts));
    },
    initiateTripLifts(state, action) {
      if (
        !state.lifts[action.payload.day].includes(action.payload.helperName)
      ) {
        state.lifts[action.payload.day].push(action.payload.helperName);
      }

      localStorage.setItem("lifts", JSON.stringify(state.lifts));
    },
    removeDriver(state, action) {
      state.lifts[action.payload.day + "Lifts"] = state.lifts[
        action.payload.day + "Lifts"
      ].filter((helper) => helper !== action.payload.helperName);
      state.lifts[action.payload.day + "Lifts"].push(action.payload.helperName);
      console.log(current(state.lifts));
      localStorage.setItem("lifts", JSON.stringify(state.lifts));
    },
    addDriver(state, action) {
      state.lifts[action.payload.day + "LiftsChosen"].push(
        action.payload.helperName
      );
      state.lifts[action.payload.day + "LiftsSpare"] = state.lifts[
        action.payload.day + "LiftsSpare"
      ].filter((helper) => helper !== action.payload.helperName);
      localStorage.setItem("lifts", JSON.stringify(state.lifts));
    },
    removeTripDriver(state, action) {
      state.lifts[action.payload.day] = state.lifts[action.payload.day].filter(
        (helper) => helper !== action.payload.helperName
      );
      state.lifts[action.payload.day + "Spare"].push(action.payload.helperName);
      console.log(current(state.lifts));
      localStorage.setItem("lifts", JSON.stringify(state.lifts));
    },
    addTripDriver(state, action) {
      state.lifts[action.payload.day].push(action.payload.helperName);
      state.lifts[action.payload.day + "Spare"] = state.lifts[
        action.payload.day + "Spare"
      ].filter((helper) => helper !== action.payload.helperName);
      console.log(current(state.lifts));
      localStorage.setItem("lifts", JSON.stringify(state.lifts));
    },
  },
});

export const allocationActions = allocationSlice.actions;
export default allocationSlice.reducer;
