export default class Pizza {
  getToppings(pizzaIndex) {
    let template = "<ul>";
    this.toppings.forEach((T, i) => {
      template += `
    <li>${T}<span class="text-danger" onclick="app.pizzaController.removeTopping(${pizzaIndex}, ${i})">X</span></li>      
    `;
    });
    template += "</ul>";
    return template;
  }

  constructor(data) {
    this.name = data.name;
    this.toppings = data.toppings || [];
    this.crustType = data.crustType || "Garlic Butter";
  }

  getTemplate(index) {
    let template = `
      <div class="col-4 border">
      <h1>${this.name}</h1>
      <h3>${this.crustType}</h3>
      <h3>Toppings: </h3>
      `;
    template += this.getToppings(index);
    template += `
      <form onsubmit="app.pizzaController.addTopping(event, '${index}')">
            <div class="input-group mb-3">
              <input
              type="text"
              name="toppingName"
              class="form-control"
              placeholder="Topping Type"
              aria-label="Topping Type"
              aria-describedby="button-addon2"
              required 
              />
              <div class="input-group-append">
                <button
                class="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
                >
                Add Toppings 
              </button>
            </div>
            </div>
          </form> 
      `;
    template += `
          <button class="btn btn-danger" onclick="app.pizzaController.removePizza(${index})">Remove Pizza</button>
        </div>`;
    return template;
  }
}
