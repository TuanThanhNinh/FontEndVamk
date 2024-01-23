import styles from "./PetDetail.module.scss";
import classNames from "classnames/bind";

import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function PetDetail() {
    const { id } = useParams();
    console.log(id);

    // const { id } = match.params;
    // console.log(id);
    return <div></div>;
}

export default PetDetail;
