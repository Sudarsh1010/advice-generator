import { useState, useEffect } from "react"
import pauseMobile from "./images/pattern-divider-mobile.svg"
import pauseDesktop from "./images/pattern-divider-desktop.svg"
import dice from "./images/icon-dice.svg"

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json()

    console.log(data)
    setQuotes(data.slip)
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <h1>Advice #{quotes.id}</h1>
      <p>"{quotes.advice}"</p>

      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={pauseDesktop}
        />

        <img
          src={pauseMobile}
          alt=""
        />
      </picture>

      <div>
        <button
          onClick={fetchAdvice}
        >
          <img
            src={dice}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default App;
