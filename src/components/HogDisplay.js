import {useState} from "react"
import HogList from "./HogList"
import FilterToggles from "./FilterToggles"

function HogDisplay({hogs}) {
    const [wantGreased, setWantGreased] = useState(false)

    function greaseToggle() {
        setWantGreased(!wantGreased)
        // console.log(wantGreased)
    }

    const filteredHogs = hogs.filter(hog => {
        if (wantGreased === true) {
            return hog.greased === true
        } else {
            return hog
        }
    })

    return(
        <div className="HogDisplay" >
            <FilterToggles greaseToggle={greaseToggle} wantGreased={wantGreased}/>
            <HogList hogs={filteredHogs}/>
        </div>
    )
}

export default HogDisplay
