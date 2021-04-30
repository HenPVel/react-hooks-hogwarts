import {useState} from "react"
import HogList from "./HogList"
import FilterToggles from "./FilterToggles"

function HogDisplay({hogs}) {
    const [wantGreased, setWantGreased] = useState(false)
    const [sortBy, setSort] = useState("name")
    const [hiddenHogNames, setHiddenHogs] = useState([])

    function greaseToggle() {
        setWantGreased(!wantGreased)
        // console.log(wantGreased)
    }

    function changeSort(event){
        setSort(event.target.value)
    }

    function removeHog(event){
        setHiddenHogs([...hiddenHogNames, event.target.id])
    }

    function resetShownHogs(){
        setHiddenHogs([])
    }

    const shownHogs = hogs.filter(hog => {
        return !hiddenHogNames.includes(hog.name)
    })

    const greasedOrNah = shownHogs.filter(hog => {
        if (wantGreased === true) {
            return hog.greased === true
        } else {
            return hog
        }
    })


    const sortedHogs = greasedOrNah.sort((a,b) => {
        if (sortBy === "name") {
            return (a.name > b.name) ? 1: -1
        }
        else if (sortBy ==="weight") {
            return a.weight - b.weight
        }
    })


    return(
        <div className="HogDisplay" >
            <FilterToggles 
                greaseToggle={greaseToggle} 
                wantGreased={wantGreased} 
                sortBy={sortBy} 
                changeSort={changeSort}
                resetShownHogs={resetShownHogs}
            />
            <HogList 
                hogs={sortedHogs}
                removeHog = {removeHog}
            
            />
        </div>
    )
}

export default HogDisplay
