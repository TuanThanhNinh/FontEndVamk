import styles from "./Pagination.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Pagination = ({
    maxPages,
    onPageChange,
    onPreviousPage,
    onNextPage,
    currentPage,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= maxPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={cx("container")}>
            <div className={cx("pagination_wrapper")}>
                <i onClick={onPreviousPage}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </i>
                {pageNumbers.map((number, ind) => (
                    <div key={number}>
                        <p
                            className={cx("page_num", {
                                active: currentPage == number,
                            })}
                            onClick={() => onPageChange(number)}
                        >
                            {number}
                        </p>
                    </div>
                ))}
                <i onClick={onNextPage}>
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </i>
            </div>
        </div>
    );
};

export default Pagination;
