import { Route, Routes } from "react-router-dom";

import { TokenContextProvider } from "../src/context/tokenContext";
import { PetsContextProvider } from "../src/context/petsContext";
import LoginPage from "./Pages/Login/Index";
import DoctorPage from "./Pages/Doctor";
import UserPage from "./Pages/User";
import PetDetail from "./Pages/PetDetail";

function App() {
    return (
        <div className="App">
            <TokenContextProvider>
                <PetsContextProvider>
                    <Routes>
                        <Route index element={<LoginPage />} />
                        <Route path="doctor/*">
                            <Route index element={<DoctorPage />} />
                            <Route path=":petId" element={<PetDetail />} />
                        </Route>
                        <Route path="user/*" element={<UserPage />}></Route>
                    </Routes>
                </PetsContextProvider>
            </TokenContextProvider>
        </div>
    );
}

export default App;
