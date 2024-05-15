// Change Header Background When Scrolling Down
function scrollHeader() {
    const header = document.getElementById("header")
    if(window.scrollY >= 50){
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
}
window.addEventListener("scroll", scrollHeader)

// Swiper Popular
var swiperPopular = new Swiper(".popular__container",{
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

// Value Accordion
const accordionItems = document.querySelectorAll(".value__accordion-item")
accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector(".value__accordion-header")

    accordionHeader.addEventListener("click", ()=>{
        const openItem = document.querySelector(".accordion-open")
        toggleItem(item)
        if(openItem && openItem!= item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item)=>{
    const accordionContent = item.querySelector(".value__accordion-content")

    if(item.classList.contains("accordion-open")){
        // accordionContent.removeAttribute("style")
        accordionContent.style.height = 0
        item.classList.remove("accordion-open")
    }else{
        accordionContent.style.height =  accordionContent.scrollHeight + "px"
        item.classList.add("accordion-open")
    }
}

// Scroll Section Active Link
const sections = document.querySelectorAll("section[id]")
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute("id")
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav__menu a[href*= ${sectionId}]`).classList.add("active-link")
        }
        else{
            document.querySelector(`.nav__menu a[href*= ${sectionId}]`).classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)

// Show Scroll Up
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up")
    if(window.scrollY >= 350){
        scrollUp.classList.add("show-scroll")
    }else{
        scrollUp.classList.remove("show-scroll")
    }
}
window.addEventListener("scroll", scrollUp)

// Dark Light Theme
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "bx-sun"

themeButton.addEventListener("click",() =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})

// Scroll Animation
const sr = ScrollReveal ({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal(".home__title, .popular__container, .subscribe__container, .footer__container")
sr.reveal(".home__description, .footer__info",{delay: 500})
sr.reveal(".home__search ",{delay: 600})
sr.reveal(".home__value ",{delay: 700})
sr.reveal(".home__images ",{delay: 800, origin: "bottom"})
sr.reveal(".logos__img ",{interval: 100})
sr.reveal(".value__images, .contact__images ",{origin: "left"})
sr.reveal(".value__content, .contact__content ",{origin: "right"})