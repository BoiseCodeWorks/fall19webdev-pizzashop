import Pizza from "../Models/Pizza.js";

let _state = {
  pizzas: []
};

export default class PizzaService {
  removeTopping(pizzaIndex, toppingIndex) {
    _state.pizzas[pizzaIndex].toppings.splice(toppingIndex, 1);
    this.savePizzas();
  }
  removePizza(pizzaIndex) {
    _state.pizzas.splice(pizzaIndex, 1);
    this.savePizzas();
  }

  addTopping(topping, pizzaIndex) {
    _state.pizzas[pizzaIndex].toppings.push(topping);
    this.savePizzas();
  }
  addPizza(newPizza) {
    _state.pizzas.push(new Pizza(newPizza));
    this.savePizzas();
  }

  constructor() {
    console.log("howdy from the pizza service");
    this.loadPizzas();
  }

  get Pizzas() {
    return _state.pizzas.map(P => new Pizza(P));
  }

  savePizzas() {
    localStorage.setItem("pizzas", JSON.stringify(_state.pizzas));
  }

  loadPizzas() {
    let savedPizzas = JSON.parse(localStorage.getItem("pizzas"));
    if (savedPizzas) {
      _state.pizzas = savedPizzas;
    }
  }
}
