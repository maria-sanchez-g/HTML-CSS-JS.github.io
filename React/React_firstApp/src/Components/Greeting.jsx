
// function Greeting(props) {
//     return (
//     <div className="Hello">
//     <h2>Hello World {props.name}</h2>;
//     </div>
//     )
// }

//This is the same than above but cleaner, using destructuring

function Greeting({ name = "World", children }) {
    return (
        <div className="Hello">
            <h2>Hello {name}</h2>
        {children && <p>{children}</p>}
        </div>
    );
}


export default Greeting; //I need to export the function to the file App.js

//Greeting is the component, it receives props (name and children) as parameters
// Props (short for properties) are a way to send data from a parent component to a child component.
// You can think of them as arguments that you pass into a function.
// props is an object containing all the data you send to the component.

// {props.name} displays the value you passed in App.
// Because props is an object, we can take advantage of object destructuring to simplify our use of props in two handy ways:
// 1. Extracting named properties into individual variables
// 2. To provide default values for certain props.

// In React, every component can wrap content inside its opening and closing tags.last
// That content — whatever is placed between those tags — is automatically passed to the component as a special prop called children.
// Using children makes your components more dynamic and reusable.

// <Composition>
// When components render other components in their output, this is called composition. 
// Composition allows us to build more complex components by combining simpler ones. This approach enables code reusability and makes 
// managing and maintaining large applications easier