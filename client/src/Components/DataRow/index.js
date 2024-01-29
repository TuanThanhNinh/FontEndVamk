import styles from "./DataRow.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";

import { useTokenContext } from "../../context/tokenContext";

const cx = classNames.bind(styles);

function DataRow({ data }) {
    const navigate = useNavigate();
    const lastVisit = data.visit[data.visit.length - 1];
    const { userRole } = useTokenContext();

    const handleOnClick = (id) => {
        if (userRole == "doctor") return navigate(`/doctor/${id}`);
        return navigate(`/user/${id}`);
    };

    return (
        <tr onClick={() => handleOnClick(data.id)}>
            <th>{data.name}</th>
            <td>{data.dob}</td>
            <td>{data.petType}</td>
            <td>{lastVisit ? lastVisit.date : "Havenot visited"}</td>
            <td>{data.status}</td>
        </tr>
    );
}

export default DataRow;
