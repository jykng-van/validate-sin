import { useRef, useState } from 'react';
import ValidateSin from  './validate-sin';
import './App.css'

function App() {
  const sin = useRef<HTMLInputElement | null>(null);
  const [valid, setValid] = useState<boolean>(false);

  function checkSin(){
    if (sin.current){
      const num = sin.current.value;
      const valid_sin = ValidateSin(num);
      //046454286 should pass, also 252929252
      setValid(valid_sin);
    }
  }

  return (
    <>
      <div className="sin-form">
        <h1>SIN Validation</h1>
        <div className="sin-field">
          <label htmlFor="sin">SIN</label>
          <input type="text" id="sin" name="sin" ref={sin} />
          <button type="button" onClick={checkSin}>Validate</button>
        </div>
        {sin.current !== null && sin.current.value && (
          <div className="results">
            <span className={valid ? 'valid':'invalid'}>{valid ? 'Valid SIN':'Invalid SIN'}</span>
          </div>
        )}

      </div>
    </>
  )
}

export default App
