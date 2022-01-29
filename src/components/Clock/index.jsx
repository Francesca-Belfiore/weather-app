import { date, hour, day, minutes } from "./../../utils.js";
import "./Clock.css";

export default function Clock() {
    
    return (
        <div className="clock">
            <p>{`${day}`}</p>
            <h1>{`${hour === "24" ? "00" : hour }`}:{`${minutes}`}</h1>
            <p>{`${date}`}</p> 
        </div>
    )
};