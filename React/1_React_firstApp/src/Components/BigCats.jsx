import SingleCat from "./SingleCat";


function BigCats () {
const cats = [ //array
  { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
  { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
  { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
  { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
  { id: 5, name: 'Lion', latinName: 'Panthera leo' },
  { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
  { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
];
    return (
         <div className="big-cats componentBox">
            <ol>
                {cats.map(cat => (
                    <SingleCat
                    key={cat.id}
                    name={cat.name}
                    latinName={cat.latinName}
                    image={cat.image}
                    />
                ))}
            </ol>
        </div>
    );
}

export default BigCats;


//creates a div conatiner for styling with 2 CSS classNames, we can style it in our CSS file
//Uses the .map() method to loop through every cat in the cats array. For each cat object, this function will return a <SingleCat /> component.
//<SingleCat key={cat.id} renders one <SingleCat> component for each cat. It passes down data (props) from the parent to the child:
//key={cat.id} → React uses this to track each list item efficiently. name={cat.name} → sends the cat’s name to the child component.

// List will displays a warning in the browser console: Warning: Each child in a list should have a unique "key" prop.
// An important rule of lists in React is that each one needs a unique field included in its data, to help React know which array item each JSX node corresponds to.
// Key is a special prop only used for rendering individual items in a collection. It helps React to track each list item uniquely.