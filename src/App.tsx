import * as React from 'react';
import './App.scss';

import logo from './logo.svg';
import CountButton from './containers/CountButton';
import CountCounter from './containers/CountCounter';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CountCounter />
        <CountButton text="Increment" />
        <CountButton text="Decrement" isDecrement={true}/>
      </div>
    );
  }
}

export default App;
