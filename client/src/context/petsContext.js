import { createContext, useContext, useState, useEffect } from "react";

const petsContext = createContext();

export const usePetsContext = () => useContext(petsContext);

export const PetsContextProvider = ({ children }) => {
    const [fullPetsData, setFullPetsData] = useState(() => {
        // Try to retrieve fullPetsData from localStorage on component mount
        const storedData = localStorage.getItem("fullPetsData");
        return storedData ? JSON.parse(storedData) : [];
    });

    useEffect(() => {
        // Store fullPetsData in localStorage whenever it changes
        localStorage.setItem("fullPetsData", JSON.stringify(fullPetsData));
    }, [fullPetsData]);

    const providedValue = { fullPetsData, setFullPetsData };
    return (
        <petsContext.Provider value={providedValue}>
            {children}
        </petsContext.Provider>
    );
};
