import Card from "../card/Card";
import {military1} from "../card/Cards";
import PointsBadge from "../pointsBadge/PointsBadge";

const YourHand = () => {
    return (
        <div className={`flex centered-horizontally centered-vertically`}>
            <Card type={military1}/>
            <Card type={military1}/>
            <Card type={military1}/>
            <Card type={military1}/>
            <Card type={military1}/>
            <Card type={military1}/>
        </div>
    )
}

export default YourHand;