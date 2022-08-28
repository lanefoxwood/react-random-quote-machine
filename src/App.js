import React, { useEffect, useState } from "react"
import './App.css';

function App() {

  const API_URL = "https://api.adviceslip.com/advice"
  const [quote, setQuote] = useState([])
  const [author, setAuthor] = useState([])


  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuote(data.slip.advice)
        setAuthor(data.slip.id)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setQuote(data.slip.advice)
        setAuthor(data.slip.id)
      })
  }

  return (
    <div className="app">
      <div id="quote-box" className="card">
        <div id="text" className="heading"><h3>{quote}</h3></div>
        <div id="author" className="subheading">No. {author}</div>
        <span>
          <a className="btn" id="tweet-quote" href={'https:///twitter.com/intent/tweet?hashtags=quotes&related=lanefoxwood&text='+quote+" "+"No."+author} rel="noreferrer" target="_blank">tweet</a>
          <a className="btn" id="tumblr-quote" href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+"No."+author+'&content='+quote} rel="noreferrer" target="_blank">tumblr</a>
          <button id="new-quote" className="btn" onClick={handleSubmit}>give me a quote</button>
        </span>

      </div>
    </div>
  );
}

export default App;
