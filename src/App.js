import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppointmentsPage from "./pages/AppointmentsPage";
import DoctorPage from "./pages/DoctorPage";
import HomePage from "./pages/HomePage";
import PatientPage from "./pages/PatientPage";
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
        path: "doctor",
        element: <DoctorPage />,
      },
      {
        path: "patient",
        element: <PatientPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
