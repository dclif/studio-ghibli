import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [film, setFilm] = useState<String>();

  useEffect(() => {
    getFilm()
  }, []);

  const getFilm = async () => {
    await axios.get(`https://ghibliapi.herokuapp.com/films`).then(function (response) {
      const apiResponse = response;
      setFilm(apiResponse.data[0].title);
    }).catch(function (error) {
      if (error.response.status === 500) { setFilm("Oops… something went wrong, try again 🤕") }
      else if (error.response.status === 418) { setFilm("418 I'm a tea pot 🫖, silly") }
    })
  };

  return (
    <div className="App">
      <h1>{film}</h1>
    </div>
  );
}

export default App;
