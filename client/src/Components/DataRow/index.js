import styles from "./DataRow.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function DataRow({ data }) {
    // console.log(data.visit);
    const lastVisit = data.visit[data.visit.length - 1];

    return (
        <tr>
            <th>
                <Link to={`/details/${data.id}`}>{data.name}</Link>
            </th>
            <td>{data.dob}</td>
            <td>{data.petType}</td>
            <td>{lastVisit ? lastVisit.date : "Havenot visited"}</td>
            <td>{data.status}</td>
        </tr>
    );
}

export default DataRow;
