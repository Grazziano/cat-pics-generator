import { useState } from 'react';
import './App.css';
import logo from './image/285654_cat_icon.png';

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
      <div>
        {catImgUrl === '' ? (
          <img src={logo} alt="logo" />
        ) : (
          <img className="imgCat" src={`${catImgUrl}`} alt="cat" />
        )}

        <button onClick={fetchPics}>Generate</button>
      </div>
    </div>
  );
}

export default App;
