import { getWheels, setWheels } from "./database.js";

// document.addEventListener(
//     'change',
//     (event) => {
//         if (event.target.name === "wheel") {
//             window.alert(`You have selected ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheels(parseInt(event.target.id))
        }
    }
)

const wheels = getWheels()

export const Wheels = () => {
    let html = `<ul>`
    const wheelsHtml = wheels.map(wheel => {
        return `<li>
        <input type="radio" name="wheel" value="${wheel.name}" id="${wheel.id}">${wheel.name}</input>
        </li>`
    })
    html += wheelsHtml.join('')
    html += `</ul>`
    return html
}