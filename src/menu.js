import {loadWebsiteElements} from "./websiteElements.js"

const createMenuImage = function(){
	const menuImageBox = document.createElement("div")
	menuImageBox.classList.add("gridItem")

	const menuImage = document.createElement("img")
	menuImage.classList.add("menuImage")

	menuImageBox.appendChild(menuImage)

	return menuImageBox
}

const createMenuItem = function(name, description, price){
	const menuItem = document.createElement("div")
	menuItem.classList.add("menuItem")

	const itemName = document.createElement("div")
	itemName.classList.add("gridItemStart", "menuItemName")
	itemName.innerText = name

	const itemDescription = document.createElement("div")
	itemDescription.classList.add("gridItemStart", "menuItemDescription")
	itemDescription.innerText = description

	const itemPrice = document.createElement("div")
	itemPrice.classList.add("gridItem", "menuItemPrice")
	itemPrice.innerText = price

	menuItem.appendChild(itemName)
	menuItem.appendChild(itemDescription)
	menuItem.appendChild(itemPrice)

	return menuItem
}

const createMenuSection = function(name){
	const menuSection = document.createElement("div")
	menuSection.classList.add("gridItemColumnStartLeft", "menuSection")

	const sectionName = document.createElement("div")
	sectionName.classList.add("menuSectionName")
	sectionName.innerText = name

	menuSection.appendChild(sectionName)

	return menuSection
}

const createMenuSectionContainer = function(){
	const menuSectionContainer = document.createElement("div")
	menuSectionContainer.classList.add("gridItemColumnStart", "menuSectionContainer")

	return menuSectionContainer
}

const createMenuContainer = function(){
	const menuContainer = document.createElement("div")
	menuContainer.classList.add("menuPageContainer")

	return menuContainer
}


const loadMenuPage = function(){
	const content = document.getElementById("content")

	const menuContainer = createMenuContainer()

	const menuImage = createMenuImage()

	const menuSectionContainer = createMenuSectionContainer()

	// Section 1
	const toBeginSection = createMenuSection("TO BEGIN")

	const bigEyeTuna = createMenuItem(
		"Big Eye Tuna Tartare Cones", 
		"Chili Aioli, Shaved Bonito, Scallions, Masago",
		"$36")

	const chickenLaksa = createMenuItem(
		"Chicken 'Laksa' Spring Roll",
		"Kalamansi, Chili Padi, Laksa Leaf",
		"$22")

	const spicyHamachi = createMenuItem(
		"Spicy Hamachi 'Tiradito'",
		"Pickled Green Chilis, Avocado, Toasted Black Sesame, Jack Fruit 'Leche De Tigre'",
		"$38")

	toBeginSection.appendChild(bigEyeTuna)
	toBeginSection.appendChild(chickenLaksa)
	toBeginSection.appendChild(spicyHamachi)

	// Section 2
	const greenMarketSection = createMenuSection("GREEN MARKET")

	const marinatedBrussels = createMenuItem(
		"Marinated Brussels Sprout Salad",
		"Fresh Buratta Cheese, Toasted Pine Nuts, Prosciutto Di Parma, Wild Rocket",
		"$29")

	greenMarketSection.appendChild(marinatedBrussels)

	// Section 3
	const flourWaterRiceSection = createMenuSection("FLOUR, WATER & RICE")

	const handCutAgnolotti = createMenuItem(
		"Hand Cut Agnolotti",
		"Heirloom Pumpkin, Mascarpone, Sage",
		"$32")

	const risotto = createMenuItem(
		"Risotto",
		"Wild Field Mushrooms, Parmigiano Reggiano, Parsley",
		"$35")

	flourWaterRiceSection.appendChild(handCutAgnolotti)
	flourWaterRiceSection.appendChild(risotto)

	menuSectionContainer.appendChild(toBeginSection)
	menuSectionContainer.appendChild(greenMarketSection)
	menuSectionContainer.appendChild(flourWaterRiceSection)

	menuContainer.appendChild(menuSectionContainer)
	menuContainer.append(menuImage)

	content.appendChild(menuContainer)
	loadWebsiteElements()
}

export {loadMenuPage}