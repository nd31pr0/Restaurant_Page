import Header from './Header.js';
import restauImg from './restau.jpg';

export default function Menu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    content.appendChild(Header()); // Add header

    const txt = document.createElement('div');
    txt.setAttribute('id', 'txt-1');
    txt.textContent = "Crab & avocado bruschetta Lorem Ipsum is simply dummy text"

    const dImg = document.createElement("div");
    dImg.setAttribute("id", "d-img");

    const imgIcn = new Image();
    imgIcn.src = restauImg;
    dImg.appendChild(imgIcn);

    content.appendChild(txt);
    content.appendChild(dImg);
}




