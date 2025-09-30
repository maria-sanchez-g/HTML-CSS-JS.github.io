function HelloWorld(props) {
    return <h1>Hello World {props.name}</h1>;
}

export default HelloWorld;


// Components let us split the UI into independent, reusable pieces, and think about each piece in isolation, with distinct logic and appearance.
// Components are represented as JavaScript functions. They accept arguments (called props) and return React elements (JSX) describing what should appear on
// the screen. Props are passed from the parent component to the child component, following a "top-down" or "unidirectional" flow.

// To  keep our components independent and reusable, we usually want to store each one in its own file with a matching uppercase name. (A single-use component only used by a
// parent may sometimes break this rule.)
// To  use these independent components across our app, we need to do two steps:
// 1. Export the component from the file where it lives 
// 2. Import the component where it needs to be rendered 
// Exports can be either default (the main or only thing exported from that file) or named (potentially one of many exports from the same file).
// Imports usually go at the top of a file. Named imports need to use curly braces.

// Every component has something called props.
// A component’s props is an object. It holds key-value pairs passed to that component when it is rendered.
// If we render this component just as <PropsDisplayer />, it has no props and the object is empty.
// We can include any number of attributes (props) with different names and values.
//You can pass string, number, array, object, function, or even another component, as props when rendering a component.

// Because props is an object, we can take advantage of object destructuring to simplify our use of props in two handy ways:
// 1. Extracting named properties into individual variables
// 2. To provide default values for certain props.

// Props has a special property called children.
// This is used when nesting child components inside our component between the opening and closing tags, making it a parent.
// We can include both native browser components and userdefined components as children.

// Although we can’t modify props, we often need to check their value or existence and change what we are rendering as a result. 
// We can use the standard conditional syntax features of JavaScript to achieve this: if statements, ternary ? operators or &&. See here for more detail.