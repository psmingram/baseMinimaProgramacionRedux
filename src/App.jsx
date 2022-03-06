import React, {Component} from 'react'
import DatosUsuarioContainer from './containers/DatosUsuarioContainer'
class App extends Component{
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <p>Hola mundo REDUX ! </p>
          <DatosUsuarioContainer />
        </header>
      </div>
    );
  }
}

export default App;
