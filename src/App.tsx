import { useState } from 'react';
import Validate from  './validate-sin';
import './App.css'

function App() {
  const [sin, setSin ] = useState<string>('');
  const [checkedSin, setCheckedSin] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);

  function checkSin(){
    if (sin){
      const valid_sin = Validate(sin);
      //046454286 should pass, also 252929252
      setValid(valid_sin);
      setCheckedSin(true);
    }
  }

  return (
    <>
      <div className="sin-form">
        <h1>SIN Validation</h1>
        <div className="sin-field">
          <label htmlFor="sin">SIN</label>
          <input type="text" id="sin" name="sin" value={sin} onChange={e=>setSin(e.target.value)} onKeyDown={e=>{if (e.key==='Enter'){
            checkSin();
          }}} />
          <button type="button" onClick={checkSin}>Validate</button>
        </div>
        {sin !== '' && checkedSin && (
          <div className="results">
            <span className={valid ? 'valid':'invalid'}>{valid ? 'Valid SIN':'Invalid SIN'}</span>
          </div>
        )}

      </div>
    </>
  )
}

export default App
