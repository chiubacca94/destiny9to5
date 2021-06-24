import * as bungie from './utils/bungie';
import loadingGhost from './assets/loadingghost.gif';
import MainNavbar from './components/MainNavbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavbar></MainNavbar>
      <header className="App-header">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
        <img src={loadingGhost} className="App-logo" alt="logo" />
        { bungie.testBungie() }
      </header>
    </div>
  );
}

export default App;
