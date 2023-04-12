import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddDoctor from "./pages/Doctor/AddDoctor";
import AddPatient from "./pages/Patient/AddPatient";
import AppointmentsPage from "./pages/Appointments/AppointmentsPage";
import EditDoctor from "./pages/Doctor/EditDoctor";
import EditPatient from "./pages/Patient/EditPatient";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

import { MessageProvider } from "./Context/MessageContext";
import AddAppointment from "./pages/Appointments/AddAppointment";

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
        path: "appointments/add",
        element: (
          <MessageProvider>
            <AddAppointment />
          </MessageProvider>
        ),
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
        element: (
          <MessageProvider>
            <EditPatient />
          </MessageProvider>
        ),
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
        element: (
          <MessageProvider>
            <EditDoctor />
          </MessageProvider>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
