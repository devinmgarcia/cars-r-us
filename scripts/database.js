const database = {
    colors: [{
            id: 1,
            name: "Silver",
            price: 100
        },
        {
            id: 2,
            name: "Midnight Blue",
            price: 150
        },
        {
            id: 3,
            name: "Firebird Red",
            price: 200
        },
        {
            id: 4,
            name: "Spring Green",
            price: 250
        },
    ],
    interiors: [{
            id: 1,
            name: "Beige Fabric",
            price: 400
        },
        {
            id: 2,
            name: "Charcoal",
            price: 500
        },
        {
            id: 3,
            name: "White Leather",
            price: 650
        },
        {
            id: 4,
            name: "Black Leather",
            price: 700
        },
    ],
    technologies: [{
            id: 1,
            name: "Basic Package (basic sound system)",
            price: 800
        },
        {
            id: 2,
            name: "Navigation Package (includes integrated navigation controls)",
            price: 850
        },
        {
            id: 3,
            name: "Visibility Package (includes side and reat cameras)",
            price: 1050
        },
        {
            id: 4,
            name: "Ultra Package (includes navigation and visibility packages)",
            price: 1600
        },
    ],
    wheels: [{
            id: 1,
            name: "17-inch Pair Radial",
            price: 300
        },
        {
            id: 2,
            name: "17-inch Pair Radial Black",
            price: 350
        },
        {
            id: 3,
            name: "18-inch Pair Spoke Silver",
            price: 550
        },
        {
            id: 4,
            name: "18-inch Pair Spoke Black",
            price: 700
        },
    ],
    orders: [],
    orderBuilder: {}
}

export const getColors = () => {
    return [...database.colors]
}
export const getInteriors = () => {
    return [...database.interiors]
}
export const getTechnologies = () => {
    return [...database.technologies]
}
export const getWheels = () => {
    return [...database.wheels]
}
export const getOrders = () => {
    return [...database.orders]
}


export const setColor = (id) => {
    database.orderBuilder.colorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}




export const addCustomOrder = () => {

    const newOrder = {...database.orderBuilder }

    const chosenColor = [...database.colors].find(color => newOrder.colorId === color.id)
    const chosenInterior = [...database.interiors].find(interior => newOrder.interiorId === interior.id)
    const chosenTechnology = [...database.technologies].find(technology => newOrder.technologyId === technology.id)
    const chosenWheels = [...database.wheels].find(wheels => newOrder.wheelsId === wheels.id)

    const orderPrice = chosenColor.price + chosenInterior.price + chosenTechnology.price + chosenWheels.price

    newOrder.price = orderPrice

    newOrder.id = [...database.orders].length + 1

    newOrder.timestamp = Date.now()

    database.orders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}