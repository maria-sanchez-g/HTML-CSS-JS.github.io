import SingleCat from "./SingleCat";
import { useState } from 'react'




const Initial_Cats = [
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
];

function BigCats () {
const [cats, setCats] = useState(Initial_Cats); //setCats is the function that updates the list, cats is the state variable


  // A–Z by common name
  const sorting = () => { //You are defining a function called sorting using an arrow function.
    setCats(prev =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name)) 
    );
  };

// setCats is the state updater function created by React’s useState. When you call it, React updates the cats state variable.
// The form setCats(prev => ...) means:
// You are using the previous state value (prev) as input.
// This is safer than setCats([...cats]) because it guarantees you always work with the most recent state, even if React batches updates internally.
//[...prev] is the spread operator. It makes a shallow copy of the array stored in prev.
//localeCompare() is a string method that compares two strings alphabetically according to language rules.


  // Z–A by common name
  const reverse = () => {
    setCats(prev =>
      [...prev].sort((a, b) => b.name.localeCompare(a.name))
    );
  };

  // Only cats whose latin name starts with "Panthera"
  const filterPanthera = () => {
    setCats(Initial_Cats.filter(c => c.latinName.split(" ")[0] === "Panthera"));
  };

// .split(" ")[0] takes the first word of the latinName.
// .filter() returns a new array with only those cats that match the condition.
// Uses INITIAL_CATS (not cats) so filtering always starts from the full list.


  // Restore full list
  const resetList = () => setCats(Initial_Cats);

return (
        <div className="big-cats componentBox">
        <div>
        <button onClick={sorting}>Sort A–Z</button>
        <button onClick={reverse}>Reverse</button>
        <button onClick={filterPanthera}>Filter Panthera</button>
        <button onClick={resetList}>Reset</button>
      </div>
      <ul>
        {cats.map(cat => (
          <li key={cat.id}>
            <SingleCat {...cat} />
          </li>
        ))}
      </ul>
    </div>
   ); 
  }

export default BigCats;