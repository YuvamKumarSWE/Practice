import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { Box, Card, Typography, Chip } from '@mui/material';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [player, setPlayer] = useState(null);
  const [result, setResult] = useState("");
  const [gameCount, setGameCount] = useState(0);
  const [wins, setWins] = useState(0);

  const play = () => {
    if (player === null) return;
    
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

    setGameCount(prev => prev + 1);

    if(computer === player){
      setResult("It's a tie! Computer chose " + computerText);
      return;
    }

    if((player === 0 && computer === 2) || 
       (player === 1 && computer === 0) || 
       (player === 2 && computer === 1)){
      setResult("Victory! You beat " + computerText);
      setWins(prev => prev + 1);
    } else {
      setResult("Defeat! " + computerText + " beats your choice");
    }
  }

  const choices = ['Rock', 'Paper', 'Scissors'];
  const emojis = ['🪨', '📄', '✂️'];

  return (
    <Box className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-12 shadow-2xl" sx={{ borderRadius: 4 }}>
        <Box className="text-center mb-12">
          <Typography variant="h2" className="font-megrim font-bold text-slate-800 mb-4">
            Rock Paper Scissors
          </Typography>
          <Typography variant="h6" className="text-slate-600 font-light">
            Classic strategy meets modern design
          </Typography>
        </Box>

        <Box className="flex justify-center gap-6 mb-8">
          <Chip 
            label={`Games: ${gameCount}`} 
            variant="outlined" 
            size="large"
            sx={{ fontSize: '1rem', padding: '8px 16px' }}
          />
          <Chip 
            label={`Wins: ${wins}`} 
            color="success" 
            size="large"
            sx={{ fontSize: '1rem', padding: '8px 16px' }}
          />
          <Chip 
            label={`Win Rate: ${gameCount > 0 ? Math.round((wins/gameCount)*100) : 0}%`} 
            color="primary" 
            size="large"
            sx={{ fontSize: '1rem', padding: '8px 16px' }}
          />
        </Box>

        <Box className="text-center mb-10">
          <Typography variant="h5" className="text-slate-700 mb-6 font-orbitron">
            Choose your weapon
          </Typography>
          
          <ToggleButtonGroup 
            value={player} 
            exclusive 
            onChange={(event, newValue) => setPlayer(newValue)}
            size='large'
            sx={{ 
              gap: 2,
              '& .MuiToggleButton-root': {
                border: '2px solid #e2e8f0',
                borderRadius: '16px',
                padding: '16px 24px',
                fontSize: '1.1rem',
                fontWeight: 600,
                minWidth: '140px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f1f5f9',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                },
                '&.Mui-selected': {
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(59,130,246,0.3)'
                }
              }
            }}
          >
            {choices.map((choice, index) => (
              <ToggleButton key={index} value={index}>
                <Box className="flex flex-col items-center gap-2">
                  <span className="text-2xl">{emojis[index]}</span>
                  {choice}
                </Box>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Box className="text-center mb-8">
          <Button 
            size='large' 
            variant='contained' 
            onClick={play}
            disabled={player === null}
            sx={{
              borderRadius: '12px',
              padding: '12px 48px',
              fontSize: '1.2rem',
              fontWeight: 600,
              textTransform: 'none',
              background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1d4ed8, #1e40af)',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 30px rgba(59,130,246,0.4)'
              },
              '&:disabled': {
                background: '#e2e8f0',
                color: '#94a3b8'
              }
            }}
          >
            {player === null ? 'Select your choice' : 'Play Game'}
          </Button>
        </Box>

        {result && (
          <Box className="text-center">
            <Card 
              sx={{ 
                padding: '20px', 
                backgroundColor: result.includes('Victory') ? '#dcfce7' : 
                                result.includes('Defeat') ? '#fef2f2' : '#f1f5f9',
                border: `2px solid ${result.includes('Victory') ? '#22c55e' : 
                                    result.includes('Defeat') ? '#ef4444' : '#64748b'}`,
                borderRadius: '12px'
              }}
            >
              <Typography 
                variant="h5" 
                className="font-yatra"
                sx={{ 
                  color: result.includes('Victory') ? '#15803d' : 
                         result.includes('Defeat') ? '#dc2626' : '#475569',
                  fontWeight: 600
                }}
              >
                {result}
              </Typography>
            </Card>
          </Box>
        )}
      </Card>
    </Box>
  );
}

export default App;