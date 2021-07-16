function aboutPage() { 
    // Grab content div
    const contentDiv = document.querySelector('#content')

    //  Header Page setup
    const button2 = document.querySelector('.btn-nav-3')
    button2.classList.add('active')

    // Create About Page
    const menuMain = document.createElement('main')
    const ContactH2 = document.createElement('h2')
    const phoneNumber = document.createElement('p')
    const hoursH2 = document.createElement('h2')
    const hoursP = document.createElement('p')
    const addressH2 = document.createElement('h2')
    const location = document.createElement('p')

    // Add Classes
    menuMain.classList.add('container')

    // add Text and misc
    ContactH2.innerText = 'Contact US'
    phoneNumber.innerText = '(123) 456-7890'
    hoursH2.innerText = 'Hours'
    hoursP.innerText = 'Mon-Sat: 11am-10pm'
    addressH2.innerText = "Address"
    location.innerText = '23000 Newport Coast Dr, Newport Coast, CA 92657'
    // Append About page to Body
    contentDiv.appendChild(menuMain)
    menuMain.appendChild(ContactH2)
    menuMain.appendChild(phoneNumber)
    menuMain.appendChild(hoursH2)
    menuMain.appendChild(hoursP)
    menuMain.appendChild(addressH2)
    menuMain.appendChild(location)
}

export {aboutPage}