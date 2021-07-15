function MenuPage() {
    // Grab content div
    const contentDiv = document.querySelector('#content')
    
    // // create header and tags
    // const homeHeader = document.createElement("header")
    // const homeH1 = document.createElement('h1')
    // const homeNav = document.createElement('nav')
    // const button1 = document.createElement('button')
    const button2 = document.querySelector('btn-nav-2')
    // const button3 = document.createElement('button')
    
    // add classes
    // button1.classList.add('btn-nav')
    button2.classList.add('active')
    // button3.classList.add('btn-nav')
    
    // add text to tags
    // homeH1.innerText = 'Hobbs'
    // button1.innerText  = "Home"
    // button2.innerText  = "Menu"
    // button3.innerText  = "About"
    
    // // append header and tags
    
    // contentDiv.appendChild(homeHeader)
    // homeHeader.appendChild(homeH1)
    // homeHeader.appendChild(homeNav)
    // homeNav.appendChild(button1)
    // homeNav.appendChild(button2)
    // homeNav.appendChild(button3)

    // Create entree Menu items 

    const menuMain = document.createElement('main')
    const menuDiv = document.createElement('div')
    const entreesdiv = document.createElement('div')
    const entreeH2 = document.createElement('h2')
    const burgerh4 = document.createElement('h4')
    const burgerP = document.createElement('p')
    const cheeseBurgerH4 = document.createElement('h4')
    const cheeseBurgerP = document.createElement('p')
    const SteakH4 = document.createElement('h4')
    const SteakP = document.createElement('p')
    const CeasarSaladH4 = document.createElement('h4')
    const CeasarSaladP = document.createElement('p')

    // Add Entree Clases

    menuMain.classList.add('Menu')
    menuDiv.classList.add('Menu-list')
    entreesdiv.classList.add('entrees')

    // Add Entree Text
    entreeH2.innerText = 'Entrees'
    burgerh4.innerText = "Burger"
    burgerP.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil?"
    cheeseBurgerH4.innerText = 'CheeseBurger'
    cheeseBurgerP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    SteakH4.innerText = 'West Coast Steak'
    SteakP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    CeasarSaladH4.innerText = 'Ceasar Salad'
    CeasarSaladP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'

    // Append Entree to body
    contentDiv.appendChild(menuMain)
    menuMain.appendChild(menuDiv)
    menuDiv.appendChild(entreesdiv)
    entreesdiv.appendChild(entreeH2)
    entreesdiv.appendChild(burgerh4)
    entreesdiv.appendChild(burgerP)
    entreesdiv.appendChild(cheeseBurgerH4)
    entreesdiv.appendChild(cheeseBurgerP)
    entreesdiv.appendChild(SteakH4)
    entreesdiv.appendChild(SteakP)
    entreesdiv.appendChild(CeasarSaladH4)
    entreesdiv.appendChild(CeasarSaladP)

    // Create Side Menu items
    const sidesDiv = document.createElement('div')
    const sidesH2 = document.createElement('h2')
    const mashedPotatoesH4 = document.createElement('h4')
    const mashedPotatoesP = document.createElement('p')
    const friesH4 = document.createElement('h4')
    const friesP = document.createElement('p')
    const sideSaladH4 = document.createElement('h4')
    const sideSaladP = document.createElement('p')
    const asparugusH4 = document.createElement('h4')
    const asparugusP = document.createElement('p')
    const broccoloH4 = document.createElement('h4')
    const broccoloP = document.createElement('p')

    // Create Side Classes 
    sidesDiv.classList.add('sides')

    // Create Sides Text
    sidesH2.innerText = 'Sides'
    mashedPotatoesH4.innerText = 'Garlic Mashed Potatoes'
    mashedPotatoesP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    friesH4.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    friesP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    sidesH2.innerText = 'Side Salad'
    sideSaladP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    asparugusH4.innerText = 'Asparugus'
    asparugusP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    broccoloH4.innerText = 'Broccoli'
    broccoloP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'

    // Append Sides to Body
    menuDiv.appendChild(sidesDiv)
    sidesDiv.appendChild(sidesH2)
    sidesDiv.appendChild(mashedPotatoesH4)
    sidesDiv.appendChild(mashedPotatoesP)
    sidesDiv.appendChild(friesH4)
    sidesDiv.appendChild(friesP)
    sidesDiv.appendChild(sideSaladH4)
    sidesDiv.appendChild(sideSaladP)
    sidesDiv.appendChild(asparugusH4)
    sidesDiv.appendChild(asparugusP)
    sidesDiv.appendChild(broccoloH4)
    sidesDiv.appendChild(broccoloP)


    // Create Beverages Menu items
    const beveragesdiv = document.createElement('div')
    const beveragesH2 = document.createElement('h2')
    const whiteWineH4 = document.createElement('h4')
    const whiteWineP = document.createElement('p')
    const redWineH4 = document.createElement('h4')
    const redWineP = document.createElement('p')
    const moscatoH4 = document.createElement('h4')
    const moscatoP = document.createElement('p')
    const primoAmoreH4 = document.createElement('h4')
    const primoAmoreP = document.createElement('p')
    const stellaRosaH4 = document.createElement('h4')
    const stellaRosaP = document.createElement('p')
    const drinksH4 = document.createElement('h4')

    // Create Beverages Classes
    beveragesdiv.classList.add('beverages')

    // Create Beverages Text
    beveragesH2.innerText = 'Beverages'
    whiteWineH4.innerText = 'White Wine'
    whiteWineP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    redWineH4.innerText = 'Red Wine'
    redWineP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    moscatoH4.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    moscatoP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    primoAmoreH4.innerText = 'Primo Amore Puglia'
    primoAmoreP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    stellaRosaH4.innerText = 'Stella Rosa'
    stellaRosaP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    drinksH4.innerText = 'Water, Coke, Sprite, Juice'

    // Append Beverages to Body
    menuDiv.appendChild(beveragesdiv)
    beveragesdiv.appendChild(beveragesH2)
    beveragesdiv.appendChild(whiteWineH4)
    beveragesdiv.appendChild(whiteWineP)
    beveragesdiv.appendChild(redWineH4)
    beveragesdiv.appendChild(redWineP)
    beveragesdiv.appendChild(moscatoH4)
    beveragesdiv.appendChild(moscatoP)
    beveragesdiv.appendChild(primoAmoreH4)
    beveragesdiv.appendChild(primoAmoreP)
    beveragesdiv.appendChild(stellaRosaH4)
    beveragesdiv.appendChild(stellaRosaP)
    beveragesdiv.appendChild(drinksH4)

    // Create Desert Menu items
    const desertDiv = document.createElement('div')
    const desertH2 = document.createElement('h2')
    const iceCreamH4 = document.createElement('h4')
    const iceCreamP = document.createElement('p')
    const brownieH4 = document.createElement('h4')
    const brownieP = document.createElement('p')
    const milkShakeH4 = document.createElement('h4')
    const milkShakeP = document.createElement('p')

    // Create Desert Classes
    desertDiv.classList.add('desert')

    // create Desert Text
    desertH2.innerText = 'Deserts'
    iceCreamH4.innerText = 'Ice Cream'
    iceCreamP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    brownieH4.innerText = 'Brownie Sundae'
    brownieP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'
    milkShakeH4.innerText = 'MilkShakes'
    milkShakeP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, veritatis.'

    // Append Desert to Body
    menuDiv.appendChild(desertDiv)
    desertDiv.appendChild(desertH2)
    desertDiv.appendChild(iceCreamH4)
    desertDiv.appendChild(iceCreamP)
    desertDiv.appendChild(brownieH4)
    desertDiv.appendChild(brownieP)
    desertDiv.appendChild(milkShakeH4)
    desertDiv.appendChild(milkShakeP)
}

export {MenuPage}