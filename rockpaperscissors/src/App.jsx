import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
function App() {

  const [player, setPlayer] = useState(0);
  const [computer, setComputer] = useState(0);

  console.log(player)

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

      <Button  size='large' variant='outlined' >
        Play
      </Button>


    </div>
  );
}

export default App;