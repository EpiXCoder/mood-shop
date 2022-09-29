import data from './data.js'

const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
	// Creating a new div element and giving it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item'
    
    // Adding an even or odd id to each card
       if (i % 2 == 0) {
        newDiv.id = 'even'
    } else {
        newDiv.id = 'odd'
    }

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
    price.innerText = data[i].price + ' CAD'
    // adding the price to the new div
    newDiv.appendChild(price)

    // ************* BUY BUTTON *************
    // Making the add to cart button
    const button = document.createElement('button')
    // Adding an  id name to the button
    button.id = data[i].name
    // Creating a custom attribute called data-price. That will hold price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
    
	// console.log(img)
    // putting the newly created div inside the items container
	itemsContainer.appendChild(newDiv)
}

const cart = [ ]

const obj = {

}

function addItem(name, price) {
    for (let i = 0; i <cart.length; i++){
        if (cart[i].name === name) {
            cart[i].qty += 1;
            return
        }
    }
    const item = {name: name, price: price, qty: 1}
    cart.push(item)
}

function showItems() {
    console.log(`you have ${getQty()} items in your cart`)
    for (let i = 0; i <cart.length; i +=1) {
        console.log(`- ${cart[i].name} ${cart[i].price} x ${cart[i]}`)
    }


    console.log(`Total in cart: $${getTotal().toFixed(2)}`)
}

function getQty() {
    let qty = 0;
    for (let i = 0; i <cart.length; i +=1) {
        qty += cart[i].qty
    }
    // console.log(`you have ${qty} items in your cart`)
    return qty;
}

function getTotal() {
    let total = 0;
    for (let i = 0; i <cart.length; i +=1) {
        total += cart[i].price * cart[i].qty;
    }
}

addItem('Apple', 0.99)
addItem('Apple', 0.99)
addItem('Opinion', 0.02)
addItem('Frisbee', 9.92)
showItems()