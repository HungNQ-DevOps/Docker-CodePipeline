import logo from './logo.svg';
import './App.css';

console.log(process.env.REACT_APP_TEXT + 5)
let test = process.env.REACT_APP_TEXT

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Test deploy 4th! {test}
        </p>
        <p>Success!!! 3th</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
