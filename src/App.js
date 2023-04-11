import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddDoctor from "./pages/Doctor/AddDoctor";
import AddPatient from "./pages/Patient/AddPatient";
import AppointmentsPage from "./pages/Appointments/AppointmentsPage";
import EditDoctor from "./pages/Doctor/EditDoctor";
import EditPatient from "./pages/Patient/EditPatient";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

import { MessageProvider } from "./Context/MessageContext";

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
        element: (
          <MessageProvider>
            <AddPatient />
          </MessageProvider>
        ),
      },
      {
        path: "patient/edit",
        element: <EditPatient />,
      },
      {
        path: "doctor/add",
        element: (
          <MessageProvider>
            <AddDoctor />
          </MessageProvider>
        ),
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
