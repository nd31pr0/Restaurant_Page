import pageLoad from './page-load.js';
import Menu from './Menu.js';
import Contact from './Contact.js';
import Header from './Header.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    content.appendChild(Header());

    // Default to home page on initial load
    pageLoad();

    // Tab switching logic
    document.getElementById('home').addEventListener('click', pageLoad);
    document.getElementById('menu').addEventListener('click', Menu);
    document.getElementById('contact').addEventListener('click', Contact);
});