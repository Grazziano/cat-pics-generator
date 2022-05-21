import { useState } from 'react';
import './App.css';
import logo from './image/285654_cat_icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [catImgUrl, setCatImgUrl] = useState('');

  function fetchPics() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((data) => {
        setCatImgUrl(data[0].url);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className='title'>Cat Pics Generator</h1>
        <div className="container-img">
          {catImgUrl === '' ? (
            <img src={logo} alt="logo" />
          ) : (
            <img className="imgCat" src={`${catImgUrl}`} alt="cat" />
          )}
        </div>

        <button className="btn btn-primary btn-lg" onClick={fetchPics}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
