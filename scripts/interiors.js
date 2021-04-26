import { getInteriors, setInterior } from "./database.js";

// document.addEventListener(
//     'change',
//     (event) => {
//         if (event.target.name === "interior") {
//             window.alert(`You have selected ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.id))
        }
    }
)

const interiors = getInteriors()

export const Interiors = () => {
    let html = `<ul>`
    const interiorsHtml = interiors.map(interior => {
        return `<li>
        <input type="radio" name="interior" value="${interior.name}" id="${interior.id}">${interior.name}</input>
        </li>`
    })
    html += interiorsHtml.join('')
    html += `</ul>`
    return html
}