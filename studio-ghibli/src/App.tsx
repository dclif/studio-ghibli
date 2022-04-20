import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [film, setFilm] = useState<String>();

  useEffect(() => {
    getFilm()
  }, []);

  const getFilm = async () => {
    const apiResponse = await axios.get(`https://ghibliapi.herokuapp.com/films`);
    setFilm(apiResponse.data[0].title);
  };

  return (
    <div className="App">
      <h1>{film}</h1>
    </div>
  );
}

export default App;
