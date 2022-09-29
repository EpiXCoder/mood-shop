import data from './data.js'

const itemsContainer = document.querySelector('#items')
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const cartTotal = document.getElementById('cart-total')
// itemList.innerHTML = '<li> Hello World</li>'

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

//------------------------------------------------
const cart = [ ]
const obj = {}

//-------------------------------------------------
// Handle change events on update input
itemList.onchange = function(e){
    if (e.target && e.target.classList.contains('update')) {
        const name = e.target.dataset.name
        const qty = parseInt(e.target.value)
        updateCart(name, qty)
    }
}



//-------------------------------------------------
// Handle clicks on list
itemList.onclick = function(e) {
    // console.log("Clicked List!!!!")
    if (e.target && e.target.classList.contains('remove')) {
        const name = e.target.dataset.name
        removeItem(name)
    } else if (e.target && e.target.classList.contains('add-one')) {
        const name = e.target.dataset.name
        addItem(name)
    } else if (e.target && e.target.classList.contains('remove-one')) {
        const name = e.target.dataset.name
        removeItem(name, 1)
    } 
    
}

// Add Items
function addItem(name, price) {
    for (let i = 0; i <cart.length; i++){
        if (cart[i].name === name) {
            cart[i].qty += 1;
            showItems()
            return
        }
    }
    const item = {name, price, qty: 1}
    cart.push(item)
    showItems()
}

//------------------------------------------------
// Show Items
function showItems() {
    const qty = getQty()
    // console.log(`you have ${getQty()} items in your cart`)
    cartQty.innerHTML = `You have ${qty} items in your cart.`
    
    let itemStr = ''
    for (let i = 0; i <cart.length; i +=1) {
        // console.log(`- ${cart[i].name} ${cart[i].price} x ${cart[i].qty}`)
        // const name = cart[i].name
        // const price = cart[i].price
        // const qty = cart[i].qty

        const{name, price, qty} = cart[i]

        itemStr += `<li>
        <span>
        ${name} ${price} x ${qty} = ${(qty * price).toFixed(2)} 
        </span>
        <span>
            <button class="remove" data-name="${name}">Remove</button>
            <button class="add-one" data-name="${name}"> + </button>
            <button class="remove-one" data-name="${name}"> - </button>
            <input class="update" type="number" data-name="${name}" placeholder="Enter Quantity">
        </span>
        </li>`
    }
    
    const all_items_button = Array.from(document.querySelectorAll("button"))
    all_items_button.forEach(elt => elt.addEventListener('click', () => {
        addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
        showItems()
      }))

    itemList.innerHTML = itemStr

    // console.log(`Total in cart: $${getTotal()}`)
    cartTotal.innerHTML = `Total in cart: $${getTotal()}`
}


//------------------------------------------------
// Get Qty
function getQty() {
    let qty = 0;
    for (let i = 0; i < cart.length; i +=1) {
        qty += cart[i].qty
    }
    // console.log(`you have ${qty} items in your cart`)
    return qty;
}

//------------------------------------------------
// Get total
function getTotal() {
    let total = 0;
    for (let i = 0; i <cart.length; i +=1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}
//------------------------------------------------
// Remove Items

function removeItem(name, qty = 0) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            if (qty > 0){
            cart[i].qty -= qty
            }
            if (cart[i].qty < 1 || qty === 0) {
                cart.splice(i, 1)
            }
            showItems()
            return
        }
    }
}

//------------------------------------------------
// Update Cart

function updateCart (name, qty) {
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].name === name) {
            if(qty < 1) {
                removeItem(name)
                return
            }
            cart[i].qty = qty
            showItems()
            return
        }
    }
}

//------------------------------------------------
// addItem('Apple', 0.99)
// addItem('Apple', 0.99)
// addItem('Opinion', 0.02)
// addItem('Frisbee', 9.92)
// addItem('Apple', 0.99)
// addItem('Orange', 1.99)
// addItem('Jacket', 50.00)
// showItems()
// removeItem('Apple', 1)
// removeItem('Frisbee')
showItems()

// console.log(itemList)