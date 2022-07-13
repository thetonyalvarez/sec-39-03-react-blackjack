import React from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import PlayingCard from './PlayingCard'


// Cards API
const BASE_API = "https://deckofcardsapi.com/api/deck/";
const SHUFFLE_API = "new/shuffle/?deck_count=1"

// Returns deck id
const getNewDeck = async () => {
  const resp = await axios.get(BASE_API + SHUFFLE_API)
  return resp.data.deck_id
}

let deck_id = await getNewDeck()

const drawCardFromDeck = async (count=1) => {
  let response = await axios.get(BASE_API + `${deck_id}/draw/?count=${count}`)
  let card = response.data.cards[0]

  if (card.value == "ACE") {
    card.value = 11
  }
  if (card.value == "JACK" || card.value == "QUEEN" || card.value == "KING") {
    card.value = 10;
  }

  card.value = Number(card.value)

  return card
}

let card1 = await drawCardFromDeck()
let card2 = await drawCardFromDeck()

const PlayingHand = () => {
  let message;
  let score = card1.value + card2.value

  if (score == 21) {
    message =
      <Alert severity="success" sx={{ width: '100%' }}>
        <AlertTitle>Blackjack!</AlertTitle>
      </Alert>
  } else if (score > 21) {
    message =
      <Alert severity="error">Bust.</Alert>
  } else if (score > 17) {
    message =
      <Alert severity="warning">So close to Blackjack! Try again.</Alert>
  } else if (score < 21) {
    message =
      <Alert severity="info">Try your hand again.</Alert>
  }

  return (
    <Container>
      <Grid container justifyContent="center" rowSpacing={3} columnSpacing={3} sx={{ my:4 }}>
        <Grid item xs={6} md={4} lg={3}>
          <PlayingCard value={card1.value} image={card1.image} />
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <PlayingCard value={card2.value} image={card2.image} />
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h5">Score: {card1.value + card2.value}</Typography>
        <Snackbar open={open} autoHideDuration={6000}>
          {message}
        </Snackbar>
      </Box>
    </Container>
  )
}

export default PlayingHand