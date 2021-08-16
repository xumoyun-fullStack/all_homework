let divElement = document.createElement('div')
let ulElement = document.createElement('ul')
let homeElement = document.createElement('li')
let aboutElement = document.createElement('li')
let contactElement = document.createElement('li')
let serviceElement = document.createElement('li')
let blogElement = document.createElement('li')


homeElement.innerText = "Home"
aboutElement.innerText = "About"
contactElement.innerText = "Contacts"
serviceElement.innerText = "Services"
blogElement.innerText = "Blog"

homeElement.classList.add("menu")
aboutElement.classList.add("menu")
contactElement.classList.add("menu")
serviceElement.classList.add("menu")
blogElement.classList.add("menu")




ulElement.appendChild(homeElement)
ulElement.appendChild(aboutElement)
ulElement.appendChild(contactElement)
ulElement.appendChild(serviceElement)
ulElement.appendChild(blogElement)
divElement.appendChild(ulElement)
divElement.setAttribute("style", "width:100%;height:100%;background:#aaaaaa")
document.body.style.margin = 0
document.body.style.padding = 0

ulElement.setAttribute("style", "display: flex; list-style: none;")
document.body.appendChild(divElement)
