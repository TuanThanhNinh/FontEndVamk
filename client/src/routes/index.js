import LoginPage from "../Pages/Login/Index";
import DoctorPage from "../Pages/Doctor";
import UserPage from "../Pages/User";
import PetDetail from "../Pages/PetDetail";

export const publicRoutes = [
    {
        path: "/",
        element: <LoginPage />,
    },
    { path: "/doctor", element: <DoctorPage /> },
    { path: "/user", element: <UserPage /> },
    { path: "/details/:id", element: <PetDetail /> },
];
