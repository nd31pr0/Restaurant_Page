import Header from './Header.js';
import restauImg from './restau.jpg';
import './style.css';


export default function Menu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    content.appendChild(Header()); // Add header

    // Creating main container for the menu page
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'home-container');

    // Menu items
    const dishes = [
        { name: 'Dish 1', description: 'Description of Dish 1' },
        { name: 'Dish 2', description: 'Description of Dish 2' },
        { name: 'Dish 3', description: 'Description of Dish 3' }
    ];

    dishes.forEach(dish => {
        // Dish container
        const dishContainer = document.createElement('div');
        dishContainer.style.marginBottom = '20px';

        // Dish name
        const dishName = document.createElement('h2');
        dishName.textContent = dish.name;
        dishName.style.color = '#333';

        // Dish description
        const dishDescription = document.createElement('p');
        dishDescription.textContent = dish.description;
        dishDescription.style.textAlign = 'center';

        // Dish image
        const image = new Image();
        image.setAttribute('id', 'dish-image')
        image.src = restauImg;

        // Appending elements to the dish container
        dishContainer.appendChild(dishName);
        dishContainer.appendChild(dishDescription);
        dishContainer.appendChild(image);

        // Appending the dish container to the menu container
        menuContainer.appendChild(dishContainer);
    });

    // Appending the menu container to the content div
    content.appendChild(menuContainer);
}




