function header() {
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
    button1.classList.add('btn-nav', 'btn-nav-1')
    button2.classList.add('btn-nav', 'btn-nav-2')
    button3.classList.add('btn-nav', 'btn-nav-3')
    
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
}

export {header}