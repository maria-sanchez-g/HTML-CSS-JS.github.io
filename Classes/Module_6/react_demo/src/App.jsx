import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComplexComment from "./components/ComplexComponent";
import CommentDate from "./components/CommentDate";
import MoviesList from "./components/MovieList";
import MoodChanger from "./components/MoodCharger";

// import HelloWorld from "./components/HelloWorld";
// import DisplayPerson from "./components/DisplayPerson";
//comments below are comment out to show an example
function App() {
  const sayHi = () => {
    console.log("sayHi");
  };
  const person = {
    name: "Maria",
    age: 28,
    gender: "Ma",
    height: 1870,
  };
  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: { // author is also an object
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};  

  return (
    <>
    <MoodChanger></MoodChanger>
    {/* <MoviesList></MoviesList> */}
      {/* <ComplexComment {...comment}></ComplexComment> */}
    </>
  );
}
export default App;
  // // const [count, setCount] = useState(0)
  // const bool = false;
  // const isButtonEnable = true;
  // return (
    // // <>
    //   {" "}
    //   {/*wherever is inside these tags are children components */}
    //   <HelloWorld name={"Maria"} />
    //   <DisplayPerson {...person} customFunction={sayHi} />{" "}
    //   {/*Destructuring the person object*/}
    //   <div className="componentBox">this is a div</div>
    //   <div
    //     className={`thisisStyle thisisAnotherStyle ${
    //       bool ? "componentBox" : "componentBox2"
    //     }`}
    //   >
    //     this is a div2
    //   </div>
    //   <h3
    //     style={{
    //       color: "blue",
    //       textTransform: "uppercase",
    //       backgroundColor: "green",
    //     }}
//     //   >
//     //     Welcome!
//     //   </h3>{" "}
//       {/* style object directly in JSX
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   );
// }

// export default App; */}