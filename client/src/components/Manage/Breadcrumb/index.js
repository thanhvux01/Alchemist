import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { useNavigate, useParams } from 'react-router';

function handleClick(event) {
  event.preventDefault();

}

export default function ManageBreadCrumb({step}) {
  const Navigate = useNavigate();
  const params = useParams();
  const {courseid,lectureid,lessonid} = params;
  const handleNavigate = () => {
     
  }
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link onClick={()=>{Navigate("/manage")}}
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color={step=="home" ? "text.primary" : "inherit"}
          href="#"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Danh sách khoá học
        </Link>
        { courseid &&
        <Link 
          onClick={()=>{Navigate(`/manage/course/${courseid}`)}}
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color={step=="course" ? "text.primary" : "inherit"}
          href="#"
        >
          Khoá học
        </Link>
          }{ lectureid &&
        <Link
        onClick={()=>{Navigate(`/manage/course/${courseid}/${lectureid}`)}}
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color={step=="lecture" ? "text.primary" : "inherit"}
          href='#'
        >
          Chương
        </Link>
            }
            { lessonid &&
        <Link
          onClick={()=>{Navigate(`/manage/course/${courseid}/${lectureid}/${lessonid}`)}}
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color={step=="lecture" ? "text.primary" : "inherit"}
          href='#'
        >
          Bài học
        </Link>
            }
      </Breadcrumbs>
          
    </div>
  );
}