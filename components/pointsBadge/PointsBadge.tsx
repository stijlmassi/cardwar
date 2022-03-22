import styles from "./PointsBadge.module.css";
import {useState} from "react";


const PointsBadge = () => {

    const [points, setPoints] = useState(0);

    return (
        <div className={`flex flex-direction-column  ${styles.container}`}>
            <p className={styles.points}>{points}</p>
            <p className={styles.underTitle}>Points</p>
        </div>
    )
}

export default PointsBadge;