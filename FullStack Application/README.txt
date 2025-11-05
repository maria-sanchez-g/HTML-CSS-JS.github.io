Part One - Create folder Back End (Server that will provide data)

1- Install dependencies
npm init -y
npm install express
npm install nodemon

2 - Create structure
Folders:
-public
--index.html
-src
--index.js
--Controllers
---Controllers.js
--Routes
---Routes.js
--Products
---Products.js

In an MVC (Model–View–Controller) structure:

1-Model = data and business logic (Product file)
The model should handle all operations related to data — these are called CRUD operations. CRUD operations are the four fundamental functions of 
persistent storage: Create, Read, Update, and Delete.

| Function                | Purpose                              | Example (without code)              |
| ----------------------- | ------------------------------------ | ----------------------------------- |
| **findAll()**           | Get all items from your data source. | “Show me all cars.”                 |
| **findById(id)**        | Get one specific car by its ID.      | “Show me car number 3.”             |
| **create(carData)**     | Add a new car to the list.           | “Add a new Toyota Camry.”           |
| **update(id, updates)** | Edit existing data.                  | “Change the price of car number 2.” |
| **remove(id)**          | Delete a car.                        | “Remove car number 5.”              |

2-View = what the user sees (your React front end)
3-Controller = the middleman that connects both (Controller file)


3- Folder Products
---Products.js
