import styles from "./PetDetail.module.scss";
import classNames from "classnames/bind";

import { Link, useParams } from "react-router-dom";
import { usePetsContext } from "../../context/petsContext";
import { useEffect, useState } from "react";

import VisitModal from "../../Components/VisitModal";
import UpdatePetDataModal from "../../Components/UpdatePetDataModal";

import { useTokenContext } from "../../context/tokenContext";

const cx = classNames.bind(styles);

function PetDetail() {
    const { fullPetsData } = usePetsContext();
    const { petId } = useParams();
    const [pet, setPet] = useState(
        fullPetsData.filter((pet) => pet.id == petId)[0]
    );

    const { userRole } = useTokenContext();

    const [showVisitDetail, setShowVisitDetail] = useState(false);
    const [showUpdatePetModal, setShowUpdatePetModal] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                setShowVisitDetail(false);
                setShowUpdatePetModal(false);
            }
        };

        // Add event listener when the component mounts
        window.addEventListener("keydown", handleKeyPress);

        // Cleanup: remove event listener when the component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const handleVisitClick = () => {
        setShowVisitDetail(!showVisitDetail);
    };

    const handleComment = () => {
        console.log("click cm btn");
    };

    return (
        <div className={cx("wrapper")}>
            <Link to="/doctor">
                <button className={cx("back_btn")}>Back</button>
            </Link>
            <div className={cx("detail_card")}>
                {pet && (
                    <div>
                        <h4>Pet Detail</h4>
                        <p>Name: {pet.name}</p>
                        <p>Owner ID: {pet.ownerId}</p>
                        <p>Pet type: {pet.petType}</p>
                        <p>Dob: {pet.dob}</p>
                        <p>Status: {pet.status}</p>
                        <p>
                            Last Visit:{" "}
                            {pet.visit.length > 0 ? (
                                <>
                                    {pet.visit[pet.visit.length - 1].date}{" "}
                                    <i onClick={handleVisitClick}>
                                        {!showVisitDetail ? (
                                            <ion-icon name="caret-down-outline"></ion-icon>
                                        ) : (
                                            <ion-icon name="caret-up-outline"></ion-icon>
                                        )}
                                    </i>
                                </>
                            ) : (
                                "havent visit "
                            )}
                        </p>
                        {showVisitDetail && (
                            <VisitModal
                                infos={pet.visit}
                                handleCloseModal={() =>
                                    setShowVisitDetail(false)
                                }
                            />
                        )}

                        {userRole == "doctor" && (
                            <button onClick={() => setShowUpdatePetModal(true)}>
                                edit pet info
                            </button>
                        )}
                        {showUpdatePetModal && <UpdatePetDataModal />}

                        {}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PetDetail;
