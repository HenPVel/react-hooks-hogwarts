import { useState } from "react";

function FilterToggles({greaseToggle, wantGreased, sortBy, changeSort, resetShownHogs}) {
    

    return (
        <>
            <button onClick={resetShownHogs}>Bring em all baaaaack</button><br/>
            <button onClick={greaseToggle}>{wantGreased ? "Greased" : "All"}</button>
            <br/>
            <label>
                Sort by:
                <select value={sortBy} onChange={changeSort}>
                    <option value = "weight">Weight</option>
                    <option value = "name">Name</option>
                </select>
            </label>
            <hr/>
        </>
    )
}

export default FilterToggles
