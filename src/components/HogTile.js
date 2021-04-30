import { useState } from "react";

function HogTile(hogObj) {
    const {name, specialty, greased, weight, image, removeHog} = hogObj
    const medal = hogObj["highest medal achieved"]

    const [details, setDetails] = useState(false)
    const [isHidden, setDisplay] = useState(false)


    function toggleDetails() {
        setDetails(!details)
    }

    function toggleDisplay(){
        setDisplay(!isHidden)
    }




    return (
        
        <div className="ui seven wide column card" >
            {/* <div style={{ display: isHidden ? "none" : "" }}> */}
            {/* <button onClick={toggleDisplay}>Hide Hog sadface</button> */}
            <div className="image">
                <img src={image} alt={name} width="220" />
            </div>
            <div className="content">
                <h1 className="header">{name}</h1>
                <ul className="description" style={{ display: details ? "" : "none" }}>
                    <li>"{specialty}"</li>
                    <li>{weight} Pounds of Bacon</li>
                    <li>{greased ? "Greased Up Babyyy" : "Super Dry"}</li>
                    <li>Medal: {medal.toUpperCase()}</li>
                </ul>
            </div>
            <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui basic green button" onClick={toggleDetails}>{details ? "Hide" : "Show"} Details</div>
                    <div class="ui basic red button" id={name} onClick={removeHog}>Hide Hog sadface</div>
                </div>
            </div>
            {/* <button onClick={toggleDetails}>{details ? "Hide" : "Show"} Details</button><br/>
            <button id={name} onClick={removeHog}>Hide Hog sadface</button> */}
        </div>
    )
}

export default HogTile

