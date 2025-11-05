//Array cars (database)
const cars = [{
    id: 1, model: "Toyoya", year: 2020, price: $5000, stok: 0, image: "https://example.com/toyota.jpg",
    id: 2, model: "Tesla", year: 2015, price: $3000, stock: 20, image: "https://example.com/toyota.jpg",
    id: 3, model: "Renault", year: 2000, price: $6000, stok: 10, image: "https://example.com/toyota.jpg",
    id: 4, model: "Mercedes", year: 2010, price: $2000, stock: 1, image: "https://example.com/toyota.jpg",
    id: 5, model: "BMW", year: 2021, price: $1000, stock: 2, image: "https://example.com/toyota.jpg",
}]

//Create
const add = (product) => {
    cars.push(product)
};

//Read
const read = () => [...cars] //returns a shallow copy to avoid mutations

//Find
const findId = (id) => {
let IdCar = cars.find ((IdCar) => IdCar.id == id);
return IdCar
}

//Update
const update (id, model) => {
    cars.splice(id)
}

//Delete 
const remove = (id) => {
const targetCar = findId(id); //Finds the specific object in your array that matches the given id.
const targetIndex = cars.indexOf(targetCar); //Locates the position (index) of that car inside the cars array.
const deletedCar = cars.splice (targetIndex, 1); //Removes the element at that index and returns the deleted object.
return deletedCar[0] //it will give you the deleted item
}

//Add