import * as bungie from './utils/bungie';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        { bungie.testBungie() }
      </header>
    </div>
  );
}

export default App;
