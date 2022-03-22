import type { NextPage } from 'next';
import styles from './Play.module.css';
import PointsBadge from "../../components/pointsBadge/PointsBadge";
import OpponentsHand from "../../components/opponentHand/OpponentsHand";
import Field from "../../components/field/Field";



const Play: NextPage = () => {
    return (
        <div className={styles.container}>
            <section>
                <div className={styles.opponentsHandArea}>
                    <PointsBadge/>
                    <OpponentsHand/>
                </div>
                <div className={`flex justify-space-evenly`}>
                    <Field/>
                    <Field/>
                    <Field/>
                </div>
                <div className={`flex justify-space-evenly`}>
                    Your cards
                </div>
            </section>
        </div>
    )
}

export default Play