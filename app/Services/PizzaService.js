import Pizza from "../Models/Pizza.js";

let _state = {
  pizzas: [
    new Pizza({
      name: "Supreme",
      crustType: "Cheddar Garlic",
      toppings: ["Pepperoni", "Green Bell Pepper", "Olives"]
    })
  ]
};

export default class PizzaService {
  addTopping(topping, pizzaIndex) {
    _state.pizzas[pizzaIndex].toppings.push(topping);
  }
  addPizza(newPizza) {
    _state.pizzas.push(new Pizza(newPizza));
  }
  constructor() {
    console.log("howdy from the pizza service");
  }
  get Pizzas() {
    return _state.pizzas.map(P => new Pizza(P));
  }
}
