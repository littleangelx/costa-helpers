import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import AddHelper from "./pages/AddHelper";
import HelperPreferences from "./pages/HelperPreferences";
import HelperDays from "./pages/HelperDays";
import AvailableJobs from "./pages/AvailableJobs";
import JobAllocation from "./pages/JobAllocation";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/add-helper", element: <AddHelper /> },
        { path: "/helper-days/:helperId", element: <HelperDays /> },
        {
          path: "/helper-preferences/:helperId",
          element: <HelperPreferences />,
        },
        { path: "available-jobs", element: <AvailableJobs /> },
        { path: "allocation/:day", element: <JobAllocation /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
