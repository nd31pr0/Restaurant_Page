import Header from './Header.js';
import restauImg from './restau.jpg';
import Contact from './Contact.js';
import Menu from './Menu.js';

export default function pageLoad() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    content.appendChild(Header()); // Add header

    // //header = Header();
    // const header = document.createElement("div");
    // header.setAttribute("id", "header");
    

    // const left = document.createElement("div")
    // left.setAttribute("id", "left");
    // left.textContent = "Welcome to our Restaurant Page";

    // const right = document.createElement("div")
    // right.setAttribute("id", "right");

    header.appendChild(left);
    header.appendChild(right);

    home.onclick = function() {
        return  pageLoad();
    }

    menu.onclick = function() {
        return Menu();
    }

    contact.onclick = function() {
        return Contact();
    }




    const cnt = document.createElement("div");
    cnt.setAttribute("id", "content-b");

    const testi = document.createElement("div");
    testi.setAttribute("id", "testimonial");
    testi.innerText = "They got really good food. Despite my being a foodie, the taste of their food is out of this world";
    cnt.appendChild(testi);

    const dImg = document.createElement("div");
    dImg.setAttribute("id", "d-img");
    
    const myIcon = new Image();
    myIcon.src = restauImg;
    dImg.appendChild(myIcon);

    cnt.appendChild(dImg);

    content.appendChild(header);
    content.appendChild(cnt);
}


