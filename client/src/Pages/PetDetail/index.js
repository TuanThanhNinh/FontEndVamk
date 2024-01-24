import styles from "./PetDetail.module.scss";
import classNames from "classnames/bind";

import { useParams } from "react-router-dom";
import { usePetsContext } from "../../context/petsContext";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function PetDetail() {
    const { fullPetsData } = usePetsContext();
    const [pet, setPet] = useState();
    const { id } = useParams();

    useEffect(() => {
        id && setPet(fullPetsData.filter((pet) => pet.id == id)[0]);
    }, [id]);

    return (
        <div>
            {pet && (
                <>
                    <h1>Pet Detail</h1>

                    <p>Name: {pet.name}</p>
                </>
            )}
        </div>
    );
}

export default PetDetail;
