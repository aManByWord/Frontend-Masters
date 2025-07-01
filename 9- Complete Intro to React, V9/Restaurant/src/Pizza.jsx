// Pizza and not pizza because we tell react to use the componats we made not the DOMs compants and it is a must
function Pizza(props) {
    return (
        <div className="pizza">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image ? props.image : "https://picsum.photos/200"} alt={props.name} />
        </div>
    );
}

export default Pizza;