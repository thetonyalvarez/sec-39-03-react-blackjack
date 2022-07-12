import React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

// Cards API
const BASE_API = "https://deckofcardsapi.com/api/deck/";
const SHUFFLE_API = "new/shuffle/?deck_count=1"

// Returns deck id
const getNewDeck = async () => {
  const resp = await axios.get(BASE_API + SHUFFLE_API)
  return resp.data.deck_id
}

const drawCardFromDeck = async (count=1) => {
  let deck_id = await getNewDeck()
  let response = await axios.get(BASE_API + `${deck_id}/draw/?count=${count}`)
}

const PlayingCard = () => {
  return (
    <Box>
      {drawCardFromDeck()}
    </Box>
  )
}

export default PlayingCard