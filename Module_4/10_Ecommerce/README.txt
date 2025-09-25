Title: E-Commerce
Description: E-Commerce website – Cars. This website will have 5 cars available to purchase. Clients will have the option of searching for cars, and adding the available cars to the cart.

The webpage will have one pages:

Index
It will show 5 cars available with this information: Title, Photo, description, and price; and two buttons or delete from cart.
At the top of the page, we will have a navigation bar with a search function.

Users can add or remove cars from the cart that will be displayed at the top and the total price will be displayed. This page will need to be live refreshed.


How it works:
Page loads
renderCards() function runs
Finds container and clears it
Loops through cars array
Creates card from template for each car
Fills in data (title, description, price, image)
Adds card to the page

User click on button (Add or remove)
Content is saved on the cart

The cart can contain duplicate items, it will show a list and the total price at the end.