import Header from './Header.js';
import restauImg from './restau.jpg';
import './style.css';


export default function pageLoad() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    content.appendChild(Header()); // Add header

    // Creating main container for the home page
    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'home-container');
    

    // Welcome message
    const welcomeMsg = document.createElement('h1');
    welcomeMsg.setAttribute('id', 'h-1')
    welcomeMsg.textContent = 'Welcome to Our Restaurant';

    // Introduction text
    const introText = document.createElement('p');
    introText.innerHTML = 'Enjoy the finest culinary experiences with our exclusive dishes and ambient atmosphere.';
    introText.style.textAlign = 'center';

    // Restaurant image
    const image = new Image();
    image.setAttribute('id', 'rest-img')
    image.src = restauImg;

    // Appending elements to the home container
    homeContainer.appendChild(welcomeMsg);
    homeContainer.appendChild(introText);
    homeContainer.appendChild(image);

    // Appending the home container to the content div
    content.appendChild(homeContainer);
}


