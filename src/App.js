import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddDoctor from "./pages/AddDoctor";
import AddPatient from "./pages/AddPatient";
import AppointmentsPage from "./pages/AppointmentsPage";
import EditDoctor from "./pages/EditDoctor";
import EditPatient from "./pages/EditPatient";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "appointments",
        element: <AppointmentsPage />,
      },
      {
        path: "patient/add",
        element: <AddPatient />,
      },
      {
        path: "patient/edit",
        element: <EditPatient />,
      },
      {
        path: "doctor/add",
        element: <AddDoctor />,
      },
      {
        path: "doctor/edit",
        element: <EditDoctor />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
