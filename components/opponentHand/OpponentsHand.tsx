import styles from "./OpponentsHand.module.css";
import {useState} from "react";

const OpponentsHand = () => {

    const [hand, setHand] = useState(6);

    let cards = [];
    for(let i = 0; i < hand; i++){
        cards.push(<span className={`${styles.card}`}/>);
    }


    return (
        <div className={`flex centered-horizontally
                centered-vertically rounding-borders 
                ${styles.opponentHand}`}>
                {cards}
        </div>
    )
}

export default OpponentsHand;