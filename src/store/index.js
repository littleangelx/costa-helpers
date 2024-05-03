import { configureStore } from "@reduxjs/toolkit";

import helperReducer from "./helperSlice";
import jobsReducer from "./jobsSlice";
import allocationReducer from "./allocationSlice";

const store = configureStore({
  reducer: {
    helpers: helperReducer,
    jobs: jobsReducer,
    allocation: allocationReducer,
  },
});

export default store;
