import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {

  const [player, setPlayer] = useState(0);
  const [result, setResult] = useState("");

  const play = () => {
    let computer = getRandomInt(3);
    
    let computerText = "";
    switch (computer) {
      case 0:
        computerText = "Rock";
        break;
      case 1:
        computerText = "Paper";
        break;
      case 2:
        computerText = "Scissors";
        break;
      default:
        computerText = "";
    }

    if(computer === player){
      setResult("TIE - Computer: " + computerText);
      return;
    }

    if((player === 0 && computer === 2) || 
       (player === 1 && computer === 0) || 
       (player === 2 && computer === 1)){
      setResult("You won! Computer: " + computerText);
    } else {
      setResult("You lost. Computer: " + computerText);
    }
  }


  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="font-alumni text-6xl font-bold">Rock Paper Scissors</h1>
      
      <ToggleButtonGroup 
        className='mt-10 mb-10' 
        value={player} 
        exclusive 
        onChange={(event, newValue) => setPlayer(newValue)}
        size='large' 
        color='primary'
      >
        <ToggleButton value={0}>Rock</ToggleButton>
        <ToggleButton value={1}>Paper</ToggleButton>
        <ToggleButton value={2}>Scissor</ToggleButton>
      </ToggleButtonGroup>

      <Button  size='large' variant='outlined' onClick={()=>play()}>
        Play
      </Button>

      {
        result && <h4>{result}</h4>
      }


    </div>
  );
}

export default App;