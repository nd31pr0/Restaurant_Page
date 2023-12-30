import Header from './Header.js';

import restauImg from './restau.jpg'; // Import missing restauImg

export default function Contact() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    content.appendChild(Header());
    // Creating main container for the contact page
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');
    contactContainer.style.display = 'flex';
    contactContainer.style.flexDirection = 'column';
    contactContainer.style.alignItems = 'center';
    contactContainer.style.justifyContent = 'center';
    contactContainer.style.margin = '20px';
    contactContainer.style.padding = '20px';
    contactContainer.style.borderRadius = '10px';
    contactContainer.style.backgroundColor = '#f3f3f3';

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
    image.src = restauImg;
    image.style.width = '300px';
    image.style.height = '200px';
    image.style.borderRadius = '10px';
    image.style.marginTop = '20px';

    // Appending elements to the container
    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(contactInfo);
    contactContainer.appendChild(image);

    // Appending the container to the content div
    content.appendChild(contactContainer);
}
