
import axios from 'axios';
import './App.css';
import Location from './components/Location';

import { useState, useEffect } from 'react';
import Modalbx from './components/Modalbx';
function App() {

  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (location) {
      axios
        .get(`https://rickandmortyapi.com/api/location?name=${location}`)
        .then((res) => setSuggestions(res.data));
    } else {
      setSuggestions([]);
    }
  }, [location]);

const [showModal, serShowModal ]= useState(false);
const closeModal = () => serShowModal(false)


  return (
    <div className="App">
{showModal && <Modalbx closeModal={closeModal} />}
<button onClick={() => serShowModal(true)}>Show Modal</button>

<input onChange={e => setLocation(e.target.value)}
value={location}/>


    {suggestions.results?.map((suggestion) => (
        <div>{suggestion.name}</div>
      ))}
<Location/>
    </div>
  );
}

export default App;
