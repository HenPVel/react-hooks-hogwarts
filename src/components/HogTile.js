import { useState } from "react";

function HogTile(hogObj) {
    const {name, specialty, greased, weight, image} = hogObj
    const medal = hogObj["highest medal achieved"]

    const [details, setDetails] = useState(false)
    function toggleDetails() {
        setDetails(!details)
    }

    return (
        <div onClick={toggleDetails} className="ui seven wide column pigTile" >
            <h1>{name}</h1>
            <img src={image} alt={name} width="220" />
            <ul style={{ display: details ? "" : "none" }}>
                <li>"{specialty}"</li>
                <li>{weight} Pounds of Bacon</li>
                <li>{greased ? "Greased Up Babyyy" : "Super Dry"}</li>
                <li>Medal: {medal.toUpperCase()}</li>
            </ul>
        </div>
    )
}

export default HogTile

