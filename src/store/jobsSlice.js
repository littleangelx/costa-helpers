import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  jobs: JSON.parse(localStorage.getItem("availableJobs")) || [
    {
      id: 0,
      name: "Kitchen Assistants",
      startTime: 9,
      endTime: 14,
      needed: 4,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 1,
      name: "Morning Car Park Stewards",
      startTime: 9.45,
      endTime: 10.3,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 2,
      name: "Welcome Desk",
      startTime: 9.45,
      endTime: 13,
      needed: 2,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 3,
      name: "Morning Coats",
      startTime: 9.45,
      endTime: 10.3,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 4,
      name: "Head Waiter",
      startTime: 9.45,
      endTime: 11.45,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 5,
      name: "Arrival Cafe Servers",
      startTime: 9.45,
      endTime: 10.3,
      needed: 5,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 6,
      name: "Welcomers",
      startTime: 9.45,
      endTime: 10.3,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 7,
      name: "Cashier",
      startTime: 9.45,
      endTime: 11.45,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 8,
      name: "Workshop Lead",
      startTime: 10.3,
      endTime: 11.3,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 9,
      name: "Workshop Helpers",
      startTime: 10.3,
      endTime: 11.3,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 10,
      name: "Activities Lead",
      startTime: 10.3,
      endTime: 11.45,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 11,
      name: "Activities Helpers",
      startTime: 10.3,
      endTime: 11.45,
      needed: 15,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 12,
      name: "Spa",
      startTime: 10.3,
      endTime: 11.45,
      needed: 4,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 13,
      name: "Photographer",
      startTime: 10.3,
      endTime: 11.45,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 14,
      name: "Cafe",
      startTime: 10.3,
      endTime: 11.45,
      needed: 4,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 15,
      name: "Stalls Supervisor",
      startTime: 10.3,
      endTime: 11.45,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 16,
      name: "Stalls Helpers",
      startTime: 10.3,
      endTime: 11.45,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 17,
      name: "Serve Sherry",
      startTime: 11.45,
      endTime: 12,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 18,
      name: "Maitre d'",
      startTime: 11.5,
      endTime: 13.15,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 19,
      name: "Lunch Servers",
      startTime: 11.5,
      endTime: 13.15,
      needed: 6,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 20,
      name: "Thought for the Day",
      startTime: 12.05,
      endTime: 12.15,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 21,
      name: "Wash up Kitchen",
      startTime: 12.15,
      endTime: 14,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 22,
      name: "Wash up Back of Church",
      startTime: 12.15,
      endTime: 14,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 23,
      name: "Washing up Trolley",
      startTime: 12.15,
      endTime: 14,
      needed: 2,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 24,
      name: "Trip Coats",
      startTime: 13.15,
      endTime: 14,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
      ],
    },

    {
      id: 25,
      name: "Trip Escorts",
      startTime: 13.3,
      endTime: 16.45,
      needed: 11,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
      ],
    },
    {
      id: 26,
      name: "Film Lead",
      startTime: 13.3,
      endTime: 16.15,
      needed: 1,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
      ],
    },
    {
      id: 27,
      name: "Film Helpers",
      startTime: 13.3,
      endTime: 16.15,
      needed: 2,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
      ],
    },
    {
      id: 28,
      name: "Serve Ice Creams",
      startTime: 15,
      endTime: 16,
      needed: 2,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
      ],
    },
    {
      id: 29,
      name: "Set up Afternoon Tea",
      startTime: 15,
      endTime: 16.15,
      needed: 2,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },

    {
      id: 30,
      name: "Clearing and Setting up Friday Afternoon Activities",
      startTime: 12,
      endTime: 14,
      needed: 8,
      days: [{ value: "fri", label: "Fri" }],
    },
    {
      id: 31,
      name: "Evening Coats",
      startTime: 17,
      endTime: 18,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
    {
      id: 32,
      name: "Evening Car Park Stewards",
      startTime: 17,
      endTime: 18,
      needed: 3,
      days: [
        { value: "wed", label: "Wed" },
        { value: "thurs", label: "Thurs" },
        { value: "fri", label: "Fri" },
      ],
    },
  ],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob(state, action) {
      state.jobs.push(action.payload);
      localStorage.setItem("availableJobs", JSON.stringify(state.jobs));
    },
    editJob(state, action) {
      const foundItem = state.jobs.find((job) => job.id === action.payload.id);
      foundItem["name"] = action.payload.name;
      foundItem["startTime"] = action.payload.startTime;
      foundItem["endTime"] = action.payload.endTime;
      foundItem["needed"] = action.payload.needed;
      foundItem["days"] = action.payload.days;
      localStorage.setItem("availableJobs", JSON.stringify(state.jobs));
    },
    deleteJob(state, action) {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      localStorage.setItem("availableJobs", JSON.stringify(state.jobs));
    },
  },
});

export const jobsActions = jobsSlice.actions;
export default jobsSlice.reducer;
