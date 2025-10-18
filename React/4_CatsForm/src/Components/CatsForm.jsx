import SingleCat from "./SingleCat";
import { useState } from 'react';

const Initial_Cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
];

function CatsForm () { //each const is a state variables. Each box is a controlled input because its value depends on React state.
const [userCat, setUserCat] = useState(''); //useCat stores what the user writes in Name box
const [latinCat, setLatinCat] = useState('');
const [imageCat, setImageCat] = useState('');

const [cats, setCats] = useState(Initial_Cats); //list state to display and update

const handleSubmit = (e) => {
  e.preventDefault(); //Prevents the browser from reloading the page when you press “Submit”.

  const newCat = { //object that temporaly holds what the user entered
    userCat: userCat,
    latinCat: latinCat,
    imageCat: imageCat,
  };

const addCat = (cat) => { //helper to add a cat to the array in state
  const nextId = cats.length ? Math.max(...cats.map(c => c.id)) + 1 : 1; //This line decides the id number for the new cat you are about to add.
  setCats(prev => [...prev, { id: nextId, name: cat.userCat, latinName: cat.latinCat, imageUrl: cat.imageCat }]); //This is the line that updates React state — and triggers the re-render.
};

// cats.length ? ... : 1
// This is a ternary operator — a short version of “if...else”.

// If cats.length (the number of cats) is not zero, it runs what’s before the colon.

// If it is zero, it returns 1.

// cats.map(c => c.id)
// Creates an array of all cat IDs.
// Example: [1, 2, 3, 4, 5, 6, 7]

// Math.max(...cats.map(c => c.id))
// Finds the highest ID in that list.
// The ... (spread operator) expands the array into individual numbers.

// Math.max(...cats.map(c => c.id)) + 1
// Takes the highest ID and adds one — so the new cat gets the next ID.

// setCats → the state updater function from useState.

// prev → represents the previous state of your array (cats).

// [...prev, {...}] → the spread operator ... copies all the existing cats into a new array,
// then adds one more object at the end (your new cat).

addCat(newCat);

  setUserCat(""); //Resets all boxes after submitting.
  setLatinCat("");
  setImageCat("");
};

return (
  <>
    <div className="FormCats componentBox">
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name
            <input
              type="text"
              value={userCat}
              name="userCat"
              onChange={(e) => setUserCat(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Latin Name
            <input
              type="text"
              value={latinCat}
              name="latinCat"
              onChange={(e) => setLatinCat(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Image
            <input
              type="text"
              value={imageCat}
              name="imageCat"
              onChange={(e) => setImageCat(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </>
);
}

export default CatsForm;