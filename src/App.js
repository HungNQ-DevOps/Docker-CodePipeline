import React, { useEffect, useState} from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get(process.env.REACT_APP_BASE_API_URL);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Deploy <code>Reactjs</code> !!! {data}
        </p>
        <p>Success!!!</p>
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
