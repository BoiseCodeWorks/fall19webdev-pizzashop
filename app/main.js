import ValuesController from "./Controllers/ValuesController.js";


class App {
    constructor() {
        valuesController: new ValuesController()
    }
}

window['app'] = new App()