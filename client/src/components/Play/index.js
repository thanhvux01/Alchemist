import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';


export default function PlayCard() {
  const theme = useTheme();
  const Navigate = useNavigate();
  return (
    <Card sx={{ display: 'flex' }} onClick={()=>{Navigate("/hangman")}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Minigame
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Hangman Alchemist 
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://res.cloudinary.com/dicgj8bdg/image/upload/v1703821125/unnamed_hpvlaz.png"
        alt="Live from space album cover"
      />
    </Card>
  );
}