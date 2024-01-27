import styles from "./DataTable.module.scss";
import classNames from "classnames/bind";

import Pagination from "../Pagination";

import { useState, useEffect } from "react";

import DataRow from "../DataRow";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function DataTable({ petsData }) {
    const [statusIsChecked, setStatusIsChecked] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState(petsData);

    // console.log(petsData);

    useEffect(() => {
        // console.log(petsData);
        if (statusIsChecked) {
            setData(petsData.filter((pet) => pet.status == "alive"));
        } else {
            setData(petsData);
        }
    }, [statusIsChecked, petsData]);

    const petsPerPage = 7; //can modify to show how many pets per page

    const indexOfLastItem = currentPage * petsPerPage;
    const indexOfFirstItem = indexOfLastItem - petsPerPage;

    const maxPages = Math.ceil(data.length / petsPerPage);

    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const previousPageHandle = () => {
        if (currentPage > 1) setCurrentPage((currentPage) => currentPage - 1);
    };
    const nextPageHandle = () => {
        if (currentPage < maxPages)
            setCurrentPage((currentPage) => currentPage + 1);
    };
    ////

    const statusChangeHandle = () => {
        setStatusIsChecked(!statusIsChecked);
    };

    return (
        <>
            <table className={cx("table")}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Dob</th>
                        <th>Type</th>
                        <th>Last Visit</th>
                        <th className={cx("status")}>
                            Status{" "}
                            <input
                                checked={statusIsChecked}
                                onChange={statusChangeHandle}
                                type="checkbox"
                            ></input>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.map((pet) => (
                        <DataRow key={pet.id} data={pet} />
                    ))}
                </tbody>
            </table>
            <div>
                {data.length > petsPerPage && (
                    <Pagination
                        maxPages={maxPages}
                        onPageChange={handlePageChange}
                        onPreviousPage={previousPageHandle}
                        onNextPage={nextPageHandle}
                        currentPage={currentPage}
                    />
                )}
            </div>
        </>
    );
}

export default DataTable;
