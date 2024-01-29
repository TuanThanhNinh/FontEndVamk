import styles from "./DoctorPage.module.scss";
import classNames from "classnames/bind";

import { useEffect, useState } from "react";

import DataTable from "../../Components/DataTable";
import AllVisit from "../../Components/AllVisit";

import useFetchPetsData from "../../customHooks/useFetchPetsData";
import useFetchVisitsData from "../../customHooks/useFetchVisitsData";

import { usePetsContext } from "../../context/petsContext";

const cx = classNames.bind(styles);

function DoctorPage() {
    const { fullPetsData, setFullPetsData } = usePetsContext();
    const [showVisits, setShowVisits] = useState(false);

    const { petsData } = useFetchPetsData();
    const { visitsData } = useFetchVisitsData();

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                setShowVisits(false);
            }
        };

        // Add event listener when the component mounts
        window.addEventListener("keydown", handleKeyPress);

        // Cleanup: remove event listener when the component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

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

    return (
        <div className={cx("doctor_page")}>
            <h3>PAWSCARE CLINIC</h3>
            <div className={cx("table_container")}>
                <div className={cx("content")}>
                    <h2>Welcome Back Doctor</h2>
                    {fullPetsData && <DataTable petsData={fullPetsData} />}
                </div>
            </div>
            <button
                onClick={() => setShowVisits(true)}
                className={cx("next_visit_btn")}
            >
                Check next visit
            </button>
            {showVisits && (
                <AllVisit
                    visitData={visitsData}
                    handleClose={() => setShowVisits(false)}
                />
            )}
        </div>
    );
}

export default DoctorPage;
