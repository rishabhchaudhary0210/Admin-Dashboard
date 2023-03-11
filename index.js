
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const links = document.querySelectorAll(".links");

menuBtn.onclick = ()=>{
    sideMenu.style.display = 'block';
}

closeBtn.onclick = ()=>{
    sideMenu.style.display = 'none';
}

themeToggler.onclick = ()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
}

for(var i=0; i<links.length; i++){
    let menuLink = links[i];
    menuLink.onclick = ()=>{

        for(var j=0; j<links.length; j++){
            let menuLink = links[j];
            menuLink.classList.remove('active');
        }

        menuLink.classList.add('active');
    }
}

