import styles from "./DoctorPage.module.scss";
import classNames from "classnames/bind";

import { useEffect } from "react";

import useFetchPetsData from "../../customHooks/useFetchPetsData";
import DataTable from "../../Components/DataTable";
import useFetchVisitsData from "../../customHooks/useFetchVisitsData";

import { usePetsContext } from "../../context/petsContext";

const cx = classNames.bind(styles);

function DoctorPage() {
    const { fullPetsData, setFullPetsData } = usePetsContext();

    const { petsData } = useFetchPetsData();
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

    return (
        <div className={cx("doctor_page")}>
            <h3>PAWSCARE CLINIC</h3>
            <div className={cx("table_container")}>
                <div className={cx("content")}>
                    <h2>Welcome Back Doctor</h2>
                    {fullPetsData && <DataTable petsData={fullPetsData} />}
                </div>
            </div>
        </div>
    );
}

export default DoctorPage;
