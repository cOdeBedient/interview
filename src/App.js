import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import JokesContainer from './JokesContainer'

function App() {
  const [jokes, setJokes] = useState([])

  function getJokes() {
    return fetch('https://official-joke-api.appspot.com/random_ten')
    .then(res => res.json())
  }
  
  useEffect(() => {
    getJokes()
    .then(data => {
      setJokes(data)
    })
  }, [])
   
  


  return (
    <JokesContainer jokes={ jokes } />
  )
}

export default App;
