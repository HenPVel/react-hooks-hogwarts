import {useState} from "react"
import HogList from "./HogList"
import FilterToggles from "./FilterToggles"

function HogDisplay({hogs}) {
    return(
        <div className="HogDisplay" >
            <FilterToggles />
            <HogList hogs={hogs}/>
        </div>
    )
}

export default HogDisplay