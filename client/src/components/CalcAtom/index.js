import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { Paper, TextField , Link} from '@mui/material';
import  axios from 'axios';
let config = {
   baseURL : "http://localhost:5000/api",
   withCredentials : true,
}
let cx = classNames.bind(styles);

const CalcAtom = () => {
  const [number,setNumber] = useState();
  const [mass,setMass] = useState();
  const [oxide,setOxide] = useState();
  const [result,setResult] = useState();
  const GetResult = async() => {
    try{
      const data = await axios.post('/calc/atom',{number:number,mass:mass,oxidationStates:oxide},config);
      setResult(data['data']);
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }
  const handleNumber = (e) => {
     setNumber(e.target.value);
  }
  const handleMass = (e) => {
    setMass(e.target.value);
 }
 const handleOxdie = (e) => {
  setOxide(e.target.value);
}

  return (
    <div className={cx('container')}>
        <div className={cx('feature-wrapper')}>
        <label>Công cụ</label>
        <div className={cx('calc-grid')}>
            <div className={cx('atom-area')}>
            <Paper className={cx('form-atom')} >
                  <TextField className={cx('input')} variant='standard' label='Atomic number' fullWidth onChange={handleNumber}/>
                  <TextField className={cx('input')} variant='standard' label='Max-number' fullWidth onChange={handleMass}/>
                  <TextField className={cx('input')} variant='standard' label='Charge'fullWidth handleOxdie={handleOxdie}/>
                  <div className={cx('submit')} onClick={()=>{
                    GetResult();
                  }}>
                          <RecyclingIcon className={cx('btn')} />
                  </div>
            </Paper>   
            </div>
            <div className={cx('composition-area')}>
            <Paper className={cx('form-atom')} >
                  <TextField className={cx('input')} variant='standard'  fullWidth value={result ? result.proton : "Proton" }/>
                  <TextField className={cx('input')} variant='standard' fullWidth value={result ? result.neutron : "Neutron"}/>
                  <TextField className={cx('input')} variant='standard'  fullWidth value={result ? result.proton : "Electron"}/>
            </Paper>   
            </div>
            <div className={cx('info-area')}>
                 <label>Atom Calculator</label>
                 <p>The atom calculator is a tool for calculating the atomic number and the mass number based on the number of atom components - protons, neutrons, and electrons (or vice versa). In addition, you can define the charge of ions with known numbers of protons and electrons. </p>
                 <div className={cx('table-preference')}>
                     <label>More info</label>
                     <Link href="#" underline="hover">What is an atom ?</Link>
                     <Link href="#" underline="hover">Atomic number , Atomic mass?</Link>
                     <Link href="#" underline="hover">How to calculate the atomic number, mass and charge?</Link>
                 </div>
            </div>
            <div className={cx('result-area')}>
                   <label className={cx('element')}>Your Element is {result ? result.element : ""}</label>
            </div>
        </div>
        </div>
    </div>
  ) 
}

export default CalcAtom