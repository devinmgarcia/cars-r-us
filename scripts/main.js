import { carsRUs } from "./cars-r-us.js"

const mainContainer = document.querySelector('.container')

const renderHtml = () => {
    mainContainer.innerHTML = carsRUs()
}

renderHtml()

document.addEventListener("stateChanged", event => {
    renderHtml()
})