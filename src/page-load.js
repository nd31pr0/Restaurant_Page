import Header from './Header.js';
import restauImg from './restau.jpg';

export default function pageLoad() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    content.appendChild(Header()); // Add header

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


