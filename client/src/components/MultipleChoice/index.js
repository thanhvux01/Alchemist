import React , {useState} from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
let cx = classNames.bind(styles);

const MultipleContent = ({data}) => {
    const theme = useTheme();
  let correct = 0;
  const [activeStep, setActiveStep] = React.useState(0);
  const [result,setResult] = useState(data);
  const [showResult,setShowResult] = useState(false);
  const [question,setQuestion] = useState(data);
  const maxSteps = question.length;
  
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    result[activeStep]["choose"] = event.target.value;
    console.log(result)
    
  };

  const handleNext = () => {
    if(activeStep+1==maxSteps){
    
       setShowResult(true)
    }else{
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={cx('container')}>
      {!showResult &&
       <Paper className={cx('choices-wrapper')}>
         <label className={cx('title')}>Câu hỏi {activeStep+1}</label>
         <Typography className={cx('typo')}>{question && question[activeStep]['name']}</Typography>
         <div className={cx('answer-section')}>
         <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={question[activeStep]['a1']} control={<Radio />} label={`Câu A : ${question[activeStep]['a1']}`} />
        <FormControlLabel  value={question[activeStep]['a2']} control={<Radio />} label={`Câu B : ${question[activeStep]['a2']}`} />
        <FormControlLabel  value={question[activeStep]['a3']} control={<Radio />} label={`Câu C : ${question[activeStep]['a3']}`} />
        <FormControlLabel  value={question[activeStep]['a4']} control={<Radio />} label={`Câu C : ${question[activeStep]['a4']}`} />
      </RadioGroup>
    </FormControl>
         </div>

        <div className={cx('controller')}>
        <MobileStepper
      variant="progress"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
        </div>

       </Paper>
   }{showResult && 
    <Paper className={cx('result-wrapper')}>
          <Typography variant='h4'>Kết quả {result.map((item,i)=>{
             if(item.choose==item.result)
              correct++;
           
          })}{correct}/{result.length}</Typography>
          <Typography>Chọn/Kết quả</Typography>
          {result.map((item)=>{
             return (
              <>
              <Typography>{item.choose}/{item.result}{item.choose==item.result ? <CheckIcon sx={{color:"green"}}/> : <ClearIcon sx={{color:"red"}}/> }</Typography>
               </>
             )
          })}
    </Paper>
   }

    </div>
  )
}

export default MultipleContent