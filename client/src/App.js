import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../src/routes";
import { TokenContextProvider } from "../src/context/tokenContext";
import { PetsContextProvider } from "../src/context/petsContext";

function App() {
    return (
        <div className="App">
            <TokenContextProvider>
                <PetsContextProvider>
                    <Routes>
                        {publicRoutes.map((route, ind) => {
                            return (
                                <Route
                                    key={ind}
                                    path={route.path}
                                    element={route.element}
                                ></Route>
                            );
                        })}
                    </Routes>
                </PetsContextProvider>
            </TokenContextProvider>
        </div>
    );
}

export default App;
