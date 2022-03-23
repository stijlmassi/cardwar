import type { NextPage } from 'next';
import styles from './Play.module.css';
import PointsBadge from "../../components/pointsBadge/PointsBadge";
import OpponentsHand from "../../components/opponentHand/OpponentsHand";
import Field from "../../components/field/Field";
import YourHand from "../../components/yourHand/YourHand";



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
                <div className={`${styles.divider}`}>
                    <p>Economy</p>
                    <p>Military</p>
                    <p>Diplomacy</p>
                </div>
                <div className={`flex justify-space-evenly`}>
                    <Field/>
                    <Field/>
                    <Field/>
                </div>
                <p className={styles.yourHandTitle}>Your Hand</p>
                <YourHand/>
            </section>
        </div>
    )
}

export default Play