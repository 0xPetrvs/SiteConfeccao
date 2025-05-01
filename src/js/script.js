class MobileNavbar{
    constructor(mobileMenu,navList,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass="active"
        this.handleClick = this.handleClick.bind(this)
    }
    animateLinks(){
        this.navLinks.forEach((Link,index) => {
            Link.style.animation
            ? (link.style.animation="")
            : (link.style.aniamtion=`navLinkFade 0.5 ease forwards 0.3`);});
        }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click",this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init()