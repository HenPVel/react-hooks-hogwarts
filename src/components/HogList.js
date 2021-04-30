import HogTile from "./HogTile"

function HogList({hogs}) {
    
 const hogArray = hogs.map(hog => <HogTile {...hog} />)
    
    return (
        <>
        <h1>Hog List</h1>
        <div className="ui grid container">
            {hogArray}
        </div>
        </>
    )

}

export default HogList
