import { combineReducers } from "redux";
import {
    datos,
    getDatos as _getDatos,
} from './datos'

export default combineReducers(
    {
        datos,
    }
)

export const getDatos = state => _getDatos(state.datos)