import data from './data.js'

const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
	// Creating a new div element and giving it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'

	// ************* IMAGE *************
    // Creating an image element
	const img = document.createElement('img');
    img.src = data[i].image
	img.width = 300
	img.height = 300
	// Adding the image to the div
	newDiv.appendChild(img)

    // ************* IMAGE DESCRIPTION *************
    // Creating a paragraph element
    const desc = document.createElement('p');
	desc.innerText = data[i].desc
    // adding the description to the div
    newDiv.appendChild(desc)

    // ************* PRICE *************
    // Creating price element
    const price = document.createElement('p')
    price.innerText = data[i].price
    // adding the price to the new div
    newDiv.appendChild(price)

    // ************* BUY BUTTON *************
    // Making the add to cart button
    const button = document.createElement('button')
    // Adding an  id name to the button
    button.id = data[i].name
    // creates a custom attribute called data-price. That will hold price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
    
	// console.log(img)
    // putting the newly created div inside the items container
	itemsContainer.appendChild(newDiv)
}