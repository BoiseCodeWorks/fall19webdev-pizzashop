import PizzaService from "../Services/PizzaService.js";

let _pizzaService = new PizzaService();

function _drawPizzas() {
  let template = "";
  let pizzas = _pizzaService.Pizzas;
  pizzas.forEach((pizza, i) => {
    template += pizza.getTemplate(i);
  });
  document.querySelector("#pizzas").innerHTML = template;
}

export default class PizzaController {
  constructor() {
    console.log("message");
    _drawPizzas();
  }

  addPizza(event) {
    event.preventDefault();
    let formData = event.target;
    let newPizza = {
      name: formData.pizzaName.value
    };
    _pizzaService.addPizza(newPizza);
    _drawPizzas();
  }
  addTopping(event, pizzaIndex) {
    event.preventDefault();
    _pizzaService.addTopping(event.target.toppingName.value, pizzaIndex);
    _drawPizzas();
  }
}
