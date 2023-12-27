import pageLoad from "./page-load";
import Menu from "./Menu";
import Contact from "./Contact";

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

    home.onclick = function() {
        return  pageLoad();
    }

    menu.onclick = function() {
        return Menu();
    }

    contact.onclick = function() {
        return Contact();
    }