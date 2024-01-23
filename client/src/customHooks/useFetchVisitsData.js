import { useEffect, useState } from "react";
// import { useTokenContext } from "../context/tokenContext";
import { fetchVisitsData } from "../api";

//custom hook to fetch pets data after got the authToken
const useFetchVisitsData = () => {
    const [visitsData, setVisitsData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const authToken = sessionStorage.getItem("userToken");

        const getVisits = async () => {
            try {
                const data = await fetchVisitsData({ Token: authToken });
                console.log(data);
                setVisitsData(data);
            } catch (err) {
                console.log(err);
                setError(err);
            }
        };

        getVisits();
    }, []);

    // Return the visitsData and error state, i return the err incase we need to track the err in somewhere else
    return { visitsData, error };
};

export default useFetchVisitsData;
