
const cart = [ ]

const obj = {

}
// add Items
function addItem(name, price) {
    for (let i = 0; i <cart.length; i++){
        if (cart[i].name === name) {
            cart[i].qty += 1;
            return
        }
    }
    const item = {name, price, qty: 1}
    cart.push(item)
}

// Show Items
function showItems() {
    console.log(`you have ${getQty()} items in your cart`)
    for (let i = 0; i <cart.length; i +=1) {
        console.log(`- ${cart[i].name} ${cart[i].price} x ${cart[i]}`)
    }


    console.log(`Total in cart: $${getTotal().toFixed(2)}`)
}

// Get Qty
function getQty() {
    let qty = 0;
    for (let i = 0; i <cart.length; i +=1) {
        qty += cart[i].qty
    }
    // console.log(`you have ${qty} items in your cart`)
    return qty;
}

// Get total
function getTotal() {
    let total = 0;
    for (let i = 0; i <cart.length; i +=1) {
        total += cart[i].price * cart[i].qty;
    }
    return total.toFixed(2)
}

addItem('Apple', 0.99)
addItem('Apple', 0.99)
addItem('Opinion', 0.02)
addItem('Frisbee', 9.92)
showItems()