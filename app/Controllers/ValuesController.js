import ValuesService from "../Services/ValuesService.js";

//Private
let _valuesService = new ValuesService()


//Public
export default class ValuesController {
    constructor() {
        console.log(_valuesService.Values)
    }

}