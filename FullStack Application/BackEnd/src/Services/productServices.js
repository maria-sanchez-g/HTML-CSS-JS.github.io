//Array cars (database)
const cars = [
    {id: 1, model: "Toyoya", year: 2020, price: 5000, stock: 0, image: "https://example.com/toyota.jpg"},
    {id: 2, model: "Tesla", year: 2015, price: 3000, stock: 20, image: "https://example.com/toyota.jpg"},
    {id: 3, model: "Renault", year: 2000, price: 6000, stock: 10, image: "https://example.com/toyota.jpg"},
    {id: 4, model: "Mercedes", year: 2010, price: 2000, stock: 1, image: "https://example.com/toyota.jpg"},
    {id: 5, model: "BMW", year: 2021, price: 1000, stock: 2, image: "https://example.com/toyota.jpg"},
]

//nextid
const nextId = () => (cars.length ? Math.max(...cars.map(c => c.id)) + 1 : 1); 

//ternary operator If cars.length is greater than 0, it means the array has cars, so calculate the next ID.
//If cars.length is 0, return 1 as the first ID.
//condition ? valueIfTrue : valueIfFalse
//cars.map(c => c.id) This creates a new array (sprad operator) containing only the IDs of all cars
//Math.max() returns the largest number
//Math.max(...) + 1 This takes the highest ID and adds 1, giving you the next ID
//c is the name of the parameter in the callback function. Represents one car object from the cars array during each iteration.

// function nextId() {
//   // If there are no cars, return 1
//   if (cars.length === 0) {
//     return 1;
//   }

//   // Create an array with all the ids
//   const ids = cars.map(car => car.id);

//   // Find the maximum id
//   const maxId = Math.max(...ids);

//   // Return the next id
//   return maxId + 1;
// }


//Add
const add = (car) => {
const item = { id: nextId(), ...car };
    cars.push(item)
    return item
};

//Read
const read = () => [...cars] //returns a shallow copy to avoid mutations

//Find
const findId = (id) => {
const IdCar = cars.find ((IdCar) => IdCar.id == id);
return IdCar;
}

//Update
const update = (id, data) => { //we add data because we want to modify the id and the other content. If you want to update model, year, and price, you simply include those fields in the data object when calling the update function.
const targetCar = findId(id); //Finds the specific object in your array that matches the given id.
const targetIndex = cars.indexOf(targetCar); //Locates the position (index) of that car inside the cars array.
const updatedCar = {...targetCar, ...data}; //shallow copy
cars.splice (targetIndex, 1, updatedCar); //where the id is located, remove one item (1 refers to 1 item), insert the new element
return updatedCar //it will give you the new list
}

//Delete 
const remove = (id) => {
const targetCar = findId(id); //Finds the specific object in your array that matches the given id.
const targetIndex = cars.indexOf(targetCar); //Locates the position (index) of that car inside the cars array.
const deletedCar = cars.splice (targetIndex, 1); //Removes the element at that index and returns the deleted object.
return deletedCar[0] //it will give you the deleted item
}

module.exports = {
    remove, update, findId, read, add,
};

//We only need a shallow copy when we are changing (mutating) an object’s internal fields. The update function changes specific 
// properties of a car, so if we do not create a new object, we would be modifying the original object in memory directly.

//MediaSourceHandle.exports. This line is part of CommonJS module exporting, which is how Node.js lets you share your functions with other files.