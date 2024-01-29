import styles from "./VisitModal.module.scss";
import classNames from "classnames/bind";

import VisitDetail from "../VisitDetail";
import { useState } from "react";

import { createNewVisit } from "../../api/index";

const cx = classNames.bind(styles);

function VisitModal({ infos, handleCloseModal }) {
    const [bookingVisit, setBookingVisit] = useState(false);
    const [newVisitData, setNewVisitData] = useState({
        date: "",
        comment: "",
    });

    const petId = infos[0].petId;


    const sortedData = infos.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

   
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    const handleSubmitNewVisit = async (e) => {
        e.preventDefault();
        console.log(newVisitData);
        console.log(await createNewVisit({ petId: petId, ...newVisitData }));
        setNewVisitData({ date: "", comment: "" });
        setBookingVisit(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewVisitData({ ...newVisitData, [name]: value });
    };

    return (
        <>
            <div className={cx("overlay")} onClick={handleCloseModal}></div>
            <div className={cx("modal_wrapper")}>
                {sortedData.map((info, ind) => (
                    <VisitDetail key={ind} visit={info} />
                ))}

                {!bookingVisit && (
                    <button onClick={() => setBookingVisit(true)}>
                        book next visit
                    </button>
                )}
                {bookingVisit ? (
                    <form onSubmit={handleSubmitNewVisit}>
                        <input
                            type="date"
                            min={dateStr}
                            name="date"
                            value={newVisitData.date}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="comment"
                            value={newVisitData.comment}
                            onChange={handleInputChange}
                        />
                        <button type="submit">save</button>
                    </form>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    );
}

export default VisitModal;
