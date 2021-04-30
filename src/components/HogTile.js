
function HogTile({name,specialty,greased,weight,image}) {
    return (
        <div className="ui eight wide column pigTile" >
            <h1>Name: {name}</h1>
            <img src={image} alt={name} width="250"/>
        </div>
    )
}

export default HogTile