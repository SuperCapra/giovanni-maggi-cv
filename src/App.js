import logo from './faccioneWhited.png';
import './App.css';
import React from 'react';

function App() {
  return (
    <Homepage/>
  );
}

class Homepage extends React.Component{
  return42() {
    return '42'
  }

  renderNumber(i) {
    return(
      <p>{i}</p>
    )
  }

  render() {
    return (    
      <div className="App">
        <header className="App-header">
          <div class="wrapper-image">
            <img src={logo} className="App-logo" alt="avatar" />
          </div>
          <p>
            Ciao sono <code>Giovanni Maggi</code> e questa sarà la mia pagina :)
          </p>
          <p>Stay tuned for more</p>
          {this.return42()}
          {this.renderNumber(9)}
          <Test/>
        </header>
      </div>
    )
  }
}

class Test extends React.Component{
  render() {
    return(<p>42</p>)
  }
}

export default App;
