import {loadWebsiteElements} from "./websiteElements.js"


// create main page

const createMainImage = function(){
	const mainImageBox = document.createElement("div")
	mainImageBox.classList.add("gridItem")

	const mainImage = document.createElement("img")
	mainImage.classList.add("mainImage")

	mainImageBox.appendChild(mainImage)

	return mainImageBox
}

const createNameBox = function(){
	const name = document.createElement("p")
	name.classList.add("name")
	name.innerText = "Don's Place"

	const tagline = document.createElement("p")
	tagline.classList.add("tagline")
	tagline.innerText = "The best food. From the freshest farms."

	const nameBox = document.createElement("div")
	nameBox.classList.add("gridItemColumn", "nameBox")
	nameBox.appendChild(name)
	nameBox.appendChild(tagline)

	return nameBox
}

const createMainContainer = function(){
	const mainContainer = document.createElement("div")
	mainContainer.classList.add("mainPageContainer")

	return mainContainer
}

const loadMainPage = function(){
	const content = document.getElementById("content")
	const mainContainer = createMainContainer()

	const mainImage = createMainImage()
	const nameBox = createNameBox()

	mainContainer.appendChild(mainImage)
	mainContainer.appendChild(nameBox)

	content.appendChild(mainContainer)
	loadWebsiteElements()
}

export {loadMainPage}