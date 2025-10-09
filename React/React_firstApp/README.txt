
First I created a folder call components inside the folder src.

Components folder:
I will store my reusable UI elements

-Files:

-App.jsx:
Is my main root component and the files that I'm creating inside the folder Components are child components inside App
FThe main (root) component. It usually manages page layout and imports child components.

-Main.jsx:
The entry point. It connects React to the DOM (index.html) and tells it to render <App />.

-App.css
Styles for your App component.

-Index.css
Global styles for your whole app.


Execution:
The browser loads index.html,
Vite runs main.jsx,
React renders <App />,
App calls <Greeting />, (Example of file inside the folder Components)
Greeting returns its JSX to the screen.




Components let us split the UI into independent, reusable pieces, and think 
about each piece in isolation, with distinct logic and appearance.

Components are represented as JavaScript functions. They accept arguments
(called props) and return React elements (JSX) describing what should appear on
the screen. Props are passed from the parent component to the child component,
following a "top-down" or "unidirectional" flow.

By convention, each component begins with a capital letter (to distinguish it from 
a regular function). Historically, components were represented as classes. This 
syntax is now legacy but you may still see it in older codebases.

To  keep our components independent and reusable, we usually want to store each one in 
its own file with a matching uppercase name. (A single-use component only used by a
parent may sometimes break this rule.)
To  use these independent components across our app, we need to do two steps:

1. Export the component from the file where it lives 
2. Import the component where it needs to be rendered 

Exports can be either default (the main or only thing exported from that file) or named 
(potentially one of many exports from the same file).
Imports usually go at the top of a file. Named imports need to use curly braces.