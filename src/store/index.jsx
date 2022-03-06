import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = {}

export const store = createStore(
    reducers, initialState,
    composeEnhancers(applyMiddleware(thunk))
)
