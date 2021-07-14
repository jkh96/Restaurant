
function homePage() {
// Grab content div
const contentDiv = document.querySelector('#content')

// create header and tags
const homeHeader = document.createElement("header")
const homeH1 = document.createElement('h1')
const homeNav = document.createElement('nav')
const button1 = document.createElement('button')
const button2 = document.createElement('button')
const button3 = document.createElement('button')

// add classes
button1.classList.add('btn-nav', 'active')
button2.classList.add('btn-nav')
button3.classList.add('btn-nav')

// add text to tags
homeH1.innerText = 'Hobbs'
button1.innerText  = "Home"
button2.innerText  = "Menu"
button3.innerText  = "About"

// append header and tags

contentDiv.appendChild(homeHeader)
homeHeader.appendChild(homeH1)
homeHeader.appendChild(homeNav)
homeNav.appendChild(button1)
homeNav.appendChild(button2)
homeNav.appendChild(button3)

// Create Main and tags
const Main = document.createElement('main')
const welcomeDiv = document.createElement('div')
const welcomeH1 = document.createElement('h1')
const aboutDiv = document.createElement('div')
const aboutP1 = document.createElement('p')
const aboutP2 = document.createElement('p')
const aboutP3 = document.createElement('p')
const button4 = document.createElement('button')

// add classes
welcomeDiv.classList.add('welcome')
aboutDiv.classList.add('about')
button4.classList.add('button')

// add text
welcomeH1.innerText = 'Welcome to Hobbs!!'
aboutP1.innerText = 'The worlds finest cuisine on the west coast!'
aboutP2.innerText = 'Come Wine and Dine while enjoying world class musicians and singers set the mood!'
aboutP3.innerText = 'Hobbs has many selections from burgers, steaks, salads, deserts, and an exquisite selection of wine aged over 20 years!'
button4.innerText = 'Book A Table'

// append main and tags
contentDiv.appendChild(Main)
Main.appendChild(welcomeDiv)
welcomeDiv.appendChild(welcomeH1)
Main.appendChild(aboutDiv)
aboutDiv.appendChild(aboutP1)
aboutDiv.appendChild(aboutP2)
aboutDiv.appendChild(aboutP3)
Main.appendChild(button4)
}

export { homePage }