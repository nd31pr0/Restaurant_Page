import restauImg from './restau.jpg';


export default function pageLoad() {
    const content = document.getElementById("content");

    const header = document.createElement("div");
    header.setAttribute("id", "header");
    

    const left = document.createElement("div")
    left.setAttribute("id", "left");
    left.textContent = "Welcome to our Restaurant Page";

    const right = document.createElement("div")
    right.setAttribute("id", "right");
    

    const home = document.createElement("button");
    home.setAttribute("id", "home");
    home.textContent = "Home"
    right.appendChild(home);

    const menu = document.createElement("button");
    menu.setAttribute("id", "menu");
    menu.textContent = "Menu"
    right.appendChild(menu);

    const contact = document.createElement("button");
    contact.setAttribute("id", "contact");
    contact.textContent = "Contact";
    right.appendChild(contact);

    header.appendChild(left);
    header.appendChild(right);


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

