import { Colors } from "./colors.js"
import { addCustomOrder } from "./database.js"
import { Interiors } from "./interiors.js"
import { Orders } from "./Order.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "order-button") {
            addCustomOrder()
        }
    }
)

export const carsRUs = () => {
    return `
    <section class="choices">
        <section class="choices-colors">
            <h2>Colors</h2>
           ${Colors()}
        </section>
        <section class="choices-interior">
            <h2>Interiors</h2>
          ${Interiors()}
        </section>
        <section class="choices-technology">
            <h2>Technologies</h2>
           ${Technologies()}
        </section>
        <section class="choices-wheels">
            <h2>Wheels</h2>
           ${Wheels()}
        </section>
    </section>

    <section>
        <button id="order-button">Create Order</button>
    </section>

    <section class="orders">
        <h2>Orders</h2>
        ${Orders()}   
    </section>
    `
}