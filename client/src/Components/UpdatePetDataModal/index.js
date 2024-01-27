import styles from "./UpdatePetDataModal.module.scss";
import classNames from "classnames/bind";

import { useParams } from "react-router-dom";
import { fetchPetData } from "../../api";
import { useEffect, useState } from "react";

import { updatePetData } from "../../api/index";

const cx = classNames.bind(styles);

function UpdatePetDataModal() {
    const [currentPetData, setCurrentPetData] = useState({
        name: "",
        ownerId: "",
        petType: "",
        status: "",
        dob: "",
    });
    const { petId } = useParams();

    useEffect(() => {
        const getCurrentPetData = async () => {
            const response = await fetchPetData(petId);

            console.log(response);
            setCurrentPetData(response);
        };

        getCurrentPetData();
    }, []);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setCurrentPetData({ ...currentPetData, [name]: value });
    };

    const handleUpdatePetData = (e) => {
        e.preventDefault();

        console.log("update");
        //update function here
        updatePetData({ id: petId, updateData: currentPetData });
    };

    return (
        <>
            <div className={cx("overlay")}></div>
            <div className={cx("modal_wrapper")}>
                <form onSubmit={handleUpdatePetData}>
                    <h2>Current Pet data</h2>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={currentPetData.name}
                        onChange={handleOnChange}
                    />
                    <label>Owner ID</label>
                    <input
                        type="text"
                        name="ownerId"
                        value={currentPetData.ownerId}
                        onChange={handleOnChange}
                    />
                    <label>Pet type</label>
                    <input
                        type="text"
                        name="petType"
                        value={currentPetData.petType}
                        onChange={handleOnChange}
                    />
                    <label>Status</label>
                    <input
                        type="text"
                        name="status"
                        value={currentPetData.status}
                        onChange={handleOnChange}
                    />
                    <label>Dob</label>
                    <input
                        type="text"
                        name="dob"
                        value={currentPetData.dob}
                        onChange={handleOnChange}
                    />
                    <button type="submit">Update</button>
                </form>
            </div>
        </>
    );
}

export default UpdatePetDataModal;
