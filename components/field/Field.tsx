import styles from "./Field.module.css";
import Card from "../card/Card";
import {military1} from "../card/Cards";

interface Props {
    name?: string
}

const Field = ({name = "Military"}) => {
    return (
        <div className={`flex flex-direction-column justify-space-evenly ${styles.container}`}>
            <div className={`${styles.cards}`}>
                <Card type={military1}/>
                <Card type={military1}/>
                <Card type={military1}/>
                <Card type={military1}/>
                <Card type={military1}/>
                <Card type={military1}/>
            </div>
        </div>
    )
}

export default Field