import {loadWebsiteElements} from "./websiteElements.js"

const createContactImage = function(){
	const contactImageBox = document.createElement("div")
	contactImageBox.classList.add("gridItem")

	const contactImage = document.createElement("img")
	contactImage.classList.add("contactImage")

	contactImageBox.appendChild(contactImage)

	return contactImageBox
}

const createContactInfoContainer = function(){
	const contactInfoContainer = document.createElement("div")
	contactInfoContainer.classList.add("gridItemColumnStart", "contactInfoContainer")

	return contactInfoContainer
}

const createContactInfo = function(label, message){
	const contactInfo = document.createElement("div")
	contactInfo.classList.add("contactInfo", "gridItemColumnStart")

	const contactInfoText = document.createElement("span")
	contactInfoText.classList.add("contactInfoText")
	contactInfoText.name = label
	contactInfoText.innerText = message

	const contactInfoLabel = document.createElement("label")
	contactInfoLabel.classList.add("contactInfoLabel")
	contactInfoLabel.for = label
	contactInfoLabel.innerText = label

	contactInfo.appendChild(contactInfoLabel)
	contactInfo.appendChild(contactInfoText)

	return contactInfo
}

const createContactText = function(){
	const contactText = document.createElement("div")
	contactText.classList.add("contactText")
	contactText.innerText = "contact us now"

	return contactText
}

const createContactButton = function(){
	const contactButton = document.createElement("button")
	contactButton.classList.add("contactButton")
	contactButton.innerText = "Contact Us"

	contactButton.onclick = () => {
		const modal = document.getElementsByClassName("modal")[0]

		modal.style.display = "block"
	}

	return contactButton
}

const createContactContainer = function(){
	const contactContainer = document.createElement("div")
	contactContainer.classList.add("contactPageContainer")

	return contactContainer
}

const createModal = function(){
	const modal = document.createElement("div")
	modal.classList.add("modal")

	const modalContent = document.createElement("form")
	modalContent.classList.add("modalContent")

	const closeButton = document.createElement("span")
	closeButton.classList.add("modalCloseButton", "gridItemColumnStart")
	closeButton.innerHTML = "&times;"
	closeButton.onclick = () => {
		modal.style.display= "none"
	}

	const inputContainer = document.createElement("div")
	inputContainer.classList.add("inputContainer", "gridItemColumnStart")

	const createInput = function(name){
		const input = document.createElement("div")
		input.classList.add("input" , "gridItemColumnStartLeft")

		const inputElement = document.createElement("input")
		inputElement.classList.add("inputElement")
		inputElement.name = name

		const inputLabel = document.createElement("label")
		inputLabel.for = name
		inputLabel.innerText = name

		input.appendChild(inputLabel)
		input.appendChild(inputElement)

		return input

	}

	const createMessageBox = function(){
		const messageBox = document.createElement("textarea")
		messageBox.classList.add("messageBox")
		messageBox.name = "Message"

		const messageLabel = document.createElement("label")
		messageLabel.for = messageBox.name
		messageLabel.innerText = messageBox.name

		const messageBoxInput = document.createElement("div")
		messageBoxInput.classList.add("gridItemColumnStartLeft", "input")

		messageBoxInput.appendChild(messageLabel)
		messageBoxInput.appendChild(messageBox)

		return messageBoxInput

	}

	const submitButton = document.createElement("input")
	submitButton.type = "submit"

	inputContainer.appendChild(createInput("Name"))
	inputContainer.appendChild(createInput("Email"))
	inputContainer.appendChild(createMessageBox())
	inputContainer.appendChild(submitButton)

	modalContent.appendChild(inputContainer)
	modalContent.appendChild(closeButton)
	modal.appendChild(modalContent)

	return modal
}


const loadContactPage = function(){
	const contactContainer = createContactContainer()
	const contactImage = createContactImage()
	const contactInfoContainer = createContactInfoContainer()
	const openingHours = createContactInfo("OPENING HOURS", "blabla")
	const address = createContactInfo("ADDRESS", "blabla")
	const contactButton = createContactButton()
	const contactText = createContactText()

	const content = document.getElementById("content")

	contactInfoContainer.appendChild(openingHours)
	contactInfoContainer.appendChild(address)
	contactInfoContainer.appendChild(contactText)
	contactInfoContainer.appendChild(contactButton)

	contactContainer.appendChild(contactImage)
	contactContainer.appendChild(contactInfoContainer)

	content.appendChild(contactContainer)

	const modal = createModal()

	content.appendChild(modal)

	loadWebsiteElements()
}

export {loadContactPage}