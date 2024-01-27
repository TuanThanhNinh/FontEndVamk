import styles from "./VisitDetail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function VisitDetail({ visit }) {
    return (
        <div className={cx("wrapper")}>
            <p>date: {visit.date}</p>
            <div className={cx("comment_wrapper")}>
                {<p>comment: </p>}
                {visit.comment ? (
                    <p>{visit.comment}</p>
                ) : (
                    <p>dont have any comment</p>
                )}
            </div>
        </div>
    );
}

export default VisitDetail;
