import { useState, useEffect } from "react";

import useFetchPetsData from "../../customHooks/useFetchPetsData";
import useFetchVisitsData from "../../customHooks/useFetchVisitsData";
import { usePetsContext } from "../../context/petsContext";

import DataTable from "../../Components/DataTable";

function UserPage() {
    const { fullPetsData, setFullPetsData } = usePetsContext();
    const { petsData, err } = useFetchPetsData();
    const { visitsData } = useFetchVisitsData();

    useEffect(() => {
        if (petsData && visitsData) {
            const combineData = petsData.map((pet) => {
                const matchingPet = visitsData.filter(
                    (visit) => visit.petId === pet.id
                );

                return { ...pet, visit: [...matchingPet] };
            });

            setFullPetsData(combineData);
        }
    }, [petsData, visitsData]);

    console.log(fullPetsData);

    return (
        <>
            {" "}
            <div>user Page</div>
            {petsData && <DataTable petsData={fullPetsData} />}
        </>
    );
}

export default UserPage;
