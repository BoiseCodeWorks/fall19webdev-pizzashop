import Value from "../Models/Value.js";

//Private
let _state = {
    values: [new Value({ title: 'value 1' }), new Value({ title: 'value 2' })]
}


//Public
export default class ValuesService {

    get Values() {
        return _state.values.map(v => new Value(v))
    }

}
