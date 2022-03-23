import styles from "./Card.module.css";
import {FunctionComponent, ReactElement} from "react";
import Image from "next/image";
import {military1} from "./Cards";

interface Props {
    type: {
        description: string,
        imagePath: string,
        power: number
    }
}

const Card: FunctionComponent<Props> = ({
    type= military1
                                        }) => {
    return(
        <div className={`flex flex-direction-column centered-vertically ${styles.container}`}>
            <p className={styles.power}>{type.power}</p>
            <p className={` ${styles.description}`}>{type.description}</p>
        </div>
    )
}

export default Card;