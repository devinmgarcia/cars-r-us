import { getTechnologies, setTechnology } from "./database.js";

// document.addEventListener(
//     'change',
//     (event) => {
//         if (event.target.name === "technology") {
//             window.alert(`You have selected ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.id))
        }
    }
)

const technologies = getTechnologies()

export const Technologies = () => {
    let html = `<ul>`
    const technologiesHtml = technologies.map(technology => {
        return `<li>
        <input type="radio" name="technology" value="${technology.name}" id="${technology.id}">${technology.name}</input>
        </li>`
    })
    html += technologiesHtml.join('')
    html += `</ul>`
    return html
}