
function Greeting(props) {
    return (
    <div className="Hello">
    <h2>Hello World {props.name}</h2>;
    </div>
    )
}

export default Greeting; //I need to export the function to the file App.js