
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_99nWPW6hdsxeLkD6gUNf6ibkAKKn1SDZoGhG1Sgu'

function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);

  const convert = (e) => {
    e.preventDefault()
    axios.get(URL)
      .then((response) => {
        const json = response.data
        setRate(json.data.GBP);
        setGbp(eur * json.data.GBP);
      }).catch (error => {
        alert(error)
      })
  }


  return (
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label>Eur € </label>&nbsp;
            <input type="number" step="0.01"
            value={eur} onChange={e => setEur(e.target.value)} />
            <output>Exchange rate: {rate}</output>
        </div>
        <div>
          <label>Gbp </label>
          <output>{gbp.toFixed(2)} £</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
