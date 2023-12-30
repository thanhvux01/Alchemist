import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router';

export default function CardCourse({course}) {
  const Navigate = useNavigate();
  if(course){
  
  return (
   
    <Card sx={{ maxWidth: 240 , maxHeight: 240 , overflow:"hidden" }} onClick={()=>{Navigate(`/manage/course/${course._id}`)}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://res.cloudinary.com/dicgj8bdg/image/upload/v1703272626/360_F_552900530_D4WF1c3zGsvIGfLgKaRBrEmbvPlk6O6E_n6oat8.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
             {course.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {course.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )

  }}