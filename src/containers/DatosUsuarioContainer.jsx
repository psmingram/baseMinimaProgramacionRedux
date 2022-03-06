import React, {Component} from 'react'
import { connect } from "react-redux";
import { getDatos } from "../reducers";

class DatosUsuarioContainer extends Component {
    render(){
        const {datosUsuario} = this.props
        const {nombreUsuario, idUsuario} = datosUsuario
        return (
            <div>
                Usr : {nombreUsuario} | id: {idUsuario}
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        datosUsuario: getDatos(state)
    }
)

export default connect(mapStateToProps,null)(DatosUsuarioContainer)