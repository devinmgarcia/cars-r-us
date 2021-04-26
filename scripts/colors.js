import { getColors, setColor } from "./database.js"

// document.addEventListener(
//     'change',
//     (event) => {
//         if (event.target.name === "color") {
//             window.alert(`You have selected ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.id))
        }
    }
)

const colors = getColors()

export const Colors = () => {
    let html = `<ul>`
    const colorsHtml = colors.map(color => {
        return `<li>
        <input type="radio" name="color" value="${color.name}" id="${color.id}">${color.name}</input>
        </li>`
    })
    html += colorsHtml.join('')
    html += `</ul>`
    return html
}