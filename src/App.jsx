import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import AddHelper from "./pages/AddHelper";
import HelperPreferences from "./pages/HelperPreferences";
import HelperDays from "./pages/HelperDays";
import AvailableJobs from "./pages/AvailableJobs";
import JobAllocation from "./pages/JobAllocation";
import Timetable from "./pages/Timetable";
import Drivers from "./pages/Drivers";
import AllHelpers from "./pages/AllHelpers";
import EditHelper from "./pages/EditHelper";
import EditHelperDays from "./pages/EditHelperDays";
import HelperJobs from "./pages/HelperJobs";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "add-helper", element: <AddHelper /> },
        { path: "helper-days/:helperId", element: <HelperDays /> },
        {
          path: "helper-preferences/:helperId",
          element: <HelperPreferences />,
        },
        { path: "available-jobs", element: <AvailableJobs /> },
        { path: "allocation/:day", element: <JobAllocation /> },
        { path: "timetable/:day", element: <Timetable /> },
        { path: "drivers", element: <Drivers /> },
        { path: "all-helpers", element: <AllHelpers /> },
        { path: "edit-helper/:helperId", element: <EditHelper /> },
        { path: "edit-days/:helperId", element: <EditHelperDays /> },
        { path: "helper-jobs/:helperId", element: <HelperJobs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
