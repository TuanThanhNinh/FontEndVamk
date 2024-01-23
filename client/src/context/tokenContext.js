import { createContext, useContext, useState } from "react";

const TokenContext = createContext();

export const TokenContextProvider = ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [authToken, setAuthToken] = useState("");
    const [userRole, setUserRole] = useState("");

    const providedValue = {
        authToken,
        setAuthToken,
        userRole,
        setUserRole,
    };

    return (
        <TokenContext.Provider value={providedValue}>
            {children}
        </TokenContext.Provider>
    );
};

export const useTokenContext = () => {
    return useContext(TokenContext);
};
