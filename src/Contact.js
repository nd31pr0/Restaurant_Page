import Header from './Header.js';
import restauImg from './restau.jpg'; // Import missing restauImg
import './style.css'

export default function Contact() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    content.appendChild(Header());
    // Creating main container for the contact page
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'home-container');

    // Adding a header
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us';
    contactHeader.style.color = '#333';
    contactHeader.style.marginBottom = '15px';

    // Contact information
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = 'For reservations and inquiries:<br><strong>Phone:</strong> 123-456-7890<br><strong>Email:</strong> contact@ourrestaurant.com';
    contactInfo.style.textAlign = 'center';

    // Image
    const image = new Image();
    image.setAttribute('id', 'rest-img');
    image.src = restauImg;
    

    // Appending elements to the container
    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(contactInfo);
    contactContainer.appendChild(image);

    // Appending the container to the content div
    content.appendChild(contactContainer);
}
