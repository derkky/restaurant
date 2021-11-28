import {loadMainPage} from "./mainPage.js"
import {loadMenuPage} from "./menu.js"
import {loadContactPage} from "./contact.js"

// Create website elements, used in all pages

const createButton = function(buttonText){
	var button = document.createElement("button")
	button.classList.add("navButton")
	button.innerText = buttonText

	return button
}

const clearPage = function(){
	const content = document.getElementById("content")
	content.innerHTML = ""
}

const createNavbar = function(){
	var navbar = document.createElement("div")
	navbar.classList.add("gridItem", "navbar") 

	const homeButton = createButton("Home")
	homeButton.onclick = function(){
		clearPage()
		loadMainPage()
	}

	const menuButton = createButton("Menu")
	menuButton.onclick = function(){
		clearPage()
		loadMenuPage()
	}

	const contactButton = createButton("Contact")
	contactButton.onclick = function(){
		clearPage()
		loadContactPage()
	}

	navbar.appendChild(homeButton)
	navbar.appendChild(menuButton)
	navbar.appendChild(contactButton)

	return navbar
}

const createFooter = function(footerText){
	var footer = document.createElement("div")
	footer.classList.add("gridItem", "footer")
	footer.innerText = footerText

	return footer
}


const loadWebsiteElements = function(){
	const content = document.getElementById("content")
	const navbar = createNavbar()
	const footer = createFooter()

	content.appendChild(navbar)
	content.appendChild(footer)
}

export {loadWebsiteElements}