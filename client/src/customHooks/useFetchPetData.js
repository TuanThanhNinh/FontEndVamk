import { useEffect, useState } from "react";
// import { useTokenContext } from "../context/tokenContext";
import { fetchPetData } from "../api";

//custom hook to fetch pets data after got the authToken
const useFetchPetData = ({ id }) => {
    const [petData, setPetData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const authToken = sessionStorage.getItem("userToken");

        const getPets = async () => {
            try {
                const data = await fetchPetData({ Token: authToken, id: id });
                setPetData(data);
                // console.log(data);
            } catch (err) {
                console.log(err);
                setError(err);
            }
        };

        getPets();
    }, []);

    // Return the petsData and error state, i return the err incase we need to track the err in somewhere else
    return { petData, error };
};

export default useFetchPetData;
