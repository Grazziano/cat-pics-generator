import { useState } from 'react';
import Footer from './components/Footer';
import logo from './image/285654_cat_icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [catImgUrl, setCatImgUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchPics = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search'
      );
      const data = await response.json();
      setCatImgUrl(data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="container-img">
          {loading ? (
            <div className="loading-spinner"></div>
          ) : catImgUrl === '' ? (
            <img src={logo} alt="logo" />
          ) : (
            <img className="imgCat" src={catImgUrl} alt="cat" />
          )}
        </div>
        <button className="btn btn-custom" onClick={fetchPics}>
          Generate
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
