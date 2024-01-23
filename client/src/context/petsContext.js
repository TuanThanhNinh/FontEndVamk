import { createContext, useContext, useState } from "react";

const petsContext = createContext();

export const usePetsContext = () => useContext(petsContext);

export const PetsContextProvider = ({ children }) => {
    const [fullPetsData, setFullPetsData] = useState();

    const providedValue = { fullPetsData, setFullPetsData };

    return (
        <petsContext.Provider value={providedValue}>
            {children}
        </petsContext.Provider>
    );
};
