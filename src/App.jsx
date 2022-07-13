import { useState } from 'react'
import logo from './blackjack.png'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PlayingHand from './PlayingHand'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} alt="Blackjack!" />
      </header>
      <main className="App-main">
        <Button color="secondary" variant="contained" href="/">
          Deal New Hand
        </Button>
        <PlayingHand/>
      </main>
    </div>
  )
}

export default App
