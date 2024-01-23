import { useEffect, useState } from "react";
// import { useTokenContext } from "../context/tokenContext";
import { fetchPetsData } from "../api";

//custom hook to fetch pets data after got the authToken
const useFetchPetsData = () => {
    const [petsData, setPetsData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const authToken = sessionStorage.getItem("userToken");

        const getPets = async () => {
            try {
                const data = await fetchPetsData({ Token: authToken });
                setPetsData(data);
                console.log(data);
            } catch (err) {
                console.log(err);
                setError(err);
            }
        };

        getPets();
    }, []);

    // Return the petsData and error state, i return the err incase we need to track the err in somewhere else
    return { petsData, error };
};

export default useFetchPetsData;
