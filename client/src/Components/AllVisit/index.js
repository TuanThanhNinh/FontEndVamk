import styles from "./AllVisit.module.scss";
import classNames from "classnames/bind";
import VisitDetail from "../VisitDetail";

const cx = classNames.bind(styles);

function AllVisit({ visitData, handleClose }) {
    const sortedVisitsData = visitData.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    console.log(sortedVisitsData);
    return (
        <>
            <div onClick={handleClose} className={cx("overlay")}></div>
            <div className={cx("wrapper")}>
                {visitData.map((visit) => {
                    return (
                        <div className={cx("visit_block")}>
                            <span>petId: {visit.petId}</span>
                            <p>visit date: {visit.date}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default AllVisit;
