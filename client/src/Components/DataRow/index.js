import styles from "./DataRow.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function DataRow({ data }) {
    const navigate = useNavigate();
    const lastVisit = data.visit[data.visit.length - 1];

    const handleOnClick = (id) => {
        navigate(`/doctor/${id}`);
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
