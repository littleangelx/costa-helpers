import { configureStore } from "@reduxjs/toolkit";

import helperReducer from "./helperSlice";
import jobsReducer from "./jobsSlice";
import allocationReducer from "./allocationSlice";
import allocationJobReducer from "./allocationJobSlice";

const store = configureStore({
  reducer: {
    helpers: helperReducer,
    jobs: jobsReducer,
    allocation: allocationReducer,
    allocationJob: allocationJobReducer,
  },
});

export default store;
