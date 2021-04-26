import { getOrders } from "./database.js"

// const orderPriceTotal = (order) => {
//     const colors = getColors()
//     const interiors = getInteriors()
//     const technologies = getTechnologies()
//     const wheels = getWheels()

//     const chosenColor = colors.find(color => order.colorId === color.id)
//     const chosenInterior = interiors.find(interior => order.interiorId === interior.id)
//     const chosenTechnology = technologies.find(technology => order.techologyId === technology.id)
//     const chosenWheels = wheels.find(wheels => order.wheelsId === wheels.id)

//     return chosenColor.price + chosenInterior.price + chosenTechnology.price + chosenWheels.price
// }

const orderList = (order) => {
    return `<li>
    Order #${order.id} will add $${order.price} to your total.
    </li>`
}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    const listItems = orders.map(orderList)
    html += listItems.join('')
    html += "</ul>"
    return html
}