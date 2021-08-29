import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { downloadReducer } from "./Downloads/reducer";
import { patientReducer } from "./PatientReg/reducer";

const rootreducer = combineReducers({
    patient:patientReducer,
    downloads: downloadReducer,
})

const store = createStore(rootreducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ))


export default store;
