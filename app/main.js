import ValuesController from "./Controllers/ValuesController.js";
import PizzaController from "./Controllers/PizzaController.js";

class App {
  constructor() {
    valuesController: new ValuesController();
    this.pizzaController = new PizzaController();
  }
}

window["app"] = new App();
