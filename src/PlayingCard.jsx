import React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';

// Cards API
const BASE_API = "https://deckofcardsapi.com/api/deck/";
const SHUFFLE_API = "new/shuffle/?deck_count=1"

// Returns deck id
const getNewDeck = async () => {
  const response = await axios.get(BASE_API + SHUFFLE_API)
  console.log(response)
  return response
}

const drawCardFromDeck = async (deck_id, count = 1) => {
  let response = await axios.get(BASE_API + `${deck_id}/draw/?count=${count}`)
  console.log(response)
}

const drawCard = `${deck_id}/draw/?count=2`


const PlayingCard = () => {
  return (
    <Box>
      <img src="test" alt="Test"/>
      getNewDeck()
    </Box>
  )
}

export default PlayingCard