import { useState } from "react";

function FilterToggles({greaseToggle, wantGreased}) {
    

    return (
        <>
            <button onClick={greaseToggle}>{wantGreased ? "Greased" : "All"}</button>
            <br/>
            <select>Sorting</select>
            <hr />
        </>
    )
}

export default FilterToggles
