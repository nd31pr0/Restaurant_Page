import Header from './Header.js';
import restauImg from './restau.jpg';

export default function pageLoad() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    content.appendChild(Header()); // Add header

    // Creating main container for the home page
    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'home-container');
    homeContainer.style.display = 'flex';
    homeContainer.style.flexDirection = 'column';
    homeContainer.style.alignItems = 'center';
    homeContainer.style.justifyContent = 'center';
    homeContainer.style.margin = '20px';
    homeContainer.style.padding = '20px';
    homeContainer.style.borderRadius = '10px';
    homeContainer.style.backgroundColor = '#f3f3f3';

    // Welcome message
    const welcomeMsg = document.createElement('h1');
    welcomeMsg.textContent = 'Welcome to Our Restaurant';
    welcomeMsg.style.color = '#333';
    welcomeMsg.style.marginBottom = '15px';

    // Introduction text
    const introText = document.createElement('p');
    introText.innerHTML = 'Enjoy the finest culinary experiences with our exclusive dishes and ambient atmosphere.';
    introText.style.textAlign = 'center';

    // Restaurant image
    const image = new Image();
    image.src = restauImg;
    image.style.width = '300px';
    image.style.height = '200px';
    image.style.borderRadius = '10px';
    image.style.marginTop = '20px';

    // Appending elements to the home container
    homeContainer.appendChild(welcomeMsg);
    homeContainer.appendChild(introText);
    homeContainer.appendChild(image);

    // Appending the home container to the content div
    content.appendChild(homeContainer);
}


