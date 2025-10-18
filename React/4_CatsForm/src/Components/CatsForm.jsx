import { useState } from 'react';

const Initial_Cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' }, //It is better to use ids in react. React uses unique IDs so each list item has a stable key when rendering.
  { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
];

function CatsForm () { //each const is a state variables. Each box is a controlled input because its value depends on React state.
const [userCat, setUserCat] = useState(''); //useCat stores what the user writes in Name box
const [latinCat, setLatinCat] = useState(''); //useState() is a React Hook that allows you to store and update values that can change over time
const [imageCat, setImageCat] = useState('');

const [cats, setCats] = useState(Initial_Cats); //list state to display and update. When the component first renders, the variable cats will contain all the cats from Initial_Cats

const addCat = (cat) => { //helper to add a cat to the array in state. This function’s job is to take that object and insert it into your existing list of cats (cats).
  const nextId = cats.length ? Math.max(...cats.map(c => c.id)) + 1 : 1; //This line decides the id number for the new cat you are about to add.
  setCats(prev => [...prev, { id: nextId, name: cat.userCat, latinName: cat.latinCat, imageUrl: cat.imageCat }]); //This is the line that updates React state — and triggers the re-render.
};

// cats.length ? ... : 1
// This is a ternary operator — a short version of “if...else”.
// If the cats array is not empty.If cats.length (the number of cats) is not zero, it runs what’s before the colon. If it is zero, it returns 1.

// cats.map(c => c.id)
// Creates an array of all cat IDs.
// Example: [1, 2, 3, 4, 5, 6, 7]
// Math.max(...cats.map(c => c.id))
// Finds the highest ID in that list.
// The ... (spread operator) is used here the spread operator here to unpack the array of IDs into individual numbers,
//because Math.max() cannot read an array — it only reads separate values.
// Math.max(...cats.map(c => c.id)) + 1
// Takes the highest ID and adds one — so the new cat gets the next ID.


// setCats → the state updater function created by useState
// prev → represents the previous state of your array (cats).
// [...prev, {...}] → the spread operator ... copies all the existing cats into a new array,then adds one more object at the end (your new cat).
// This means React does not mutate the old array; it creates a new one, which is crucial because React detects changes in state by reference.
// When state changes, React automatically re-renders the component, so your new cat appears on screen immediately.

const deleteCat = (id) => {
  setCats((prev) => prev.filter((c) => c.id !== id));
};

// setCats updates the list in React state.
// .filter() creates a new array that includes all cats except the one whose id matches the one you clicked.
// !== id means “keep every cat whose ID is not equal to the one we want to remove.”
// The new array replaces the old one → React re-renders → that cat disappears.

const handleSubmit = (e) => { //handleSubmit is the function that runs when you press the Submit button in your form.
  e.preventDefault(); //Prevents the browser from reloading the page when you press “Submit”.

  const newCat = { //object that temporaly holds all the information the user typed into your form
    userCat: userCat, // React does not automatically group those three pieces of state (userCat, latinCat, imageCat) together
    latinCat: latinCat, //, so you have to manually combine them into one package. That package is newCat
    imageCat: imageCat,
  };

addCat(newCat);
  setUserCat(""); //Resets all boxes after submitting.
  setLatinCat("");
  setImageCat("");
};

// HandleSubmit function runs only when you press “Submit”.
// It is your “controller” — it tells React what to do when the form is submitted. So it needs to:
// Stop the default browser reload (e.preventDefault()).
// Collect the user input (what you typed in the boxes).
// Create a new object with that input (newCat).
// Send that new object to your array (addCat).
// Reset the form fields.
// That’s why both newCat and addCat() are used inside handleSubmit.

return (
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

      <ul >
        {cats.map(c => ( 
        <li key={c.id}>{c.name} {c.latinName} 
          <button type="button" onClick={() => deleteCat(c.id)}>
            Delete
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
//you’re using the .map() method to loop through your array of cats:Each element of the array is temporarily called c. 
// So in the first loop, c = { id: 1, name: "Cheetah" }
//c.id, c.name and c.latinName will get replace with the value

//When you add the Delete button inside the .map() like this:Each button is tied to its own c.id (that cat’s unique identifier).
//So when you click the button, React calls deleteCat(c.id) and removes that id
// If you put the Delete button outside of the .map():
// React will throw an error:
// “c is not defined”
// Because outside of .map(), c doesn’t exist anymore — the loop ended.

// The “Submit” button does not need an onClick because it is already inside a <form> that has an onSubmit event. The browser automatically triggers the form’s onSubmit event.
// The “Delete” button does need an onClick, because it performs a completely different action (removing a cat) and is not part of the form submission.

export default CatsForm;



//Steps:

//Start with an array that represents your initial list
//Create the components (use state
//Build the form
//Handle submit function (const handleSubmit)
//Render the list with map
//User filter to remove one item by Id