import styles  from './styles.module.scss';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { Paper, TextField , Link} from '@mui/material';

let cx = classNames.bind(styles);

const CalcAtomMass = () => {
  const [Z,setZ] = useState(0);
const [N,setN] = useState(0);
const handleZ = (e) => {
   setZ(e.target.value);
}
const handleN = (e) => {
    setN(e.target.value)
}
  return (
    <div className={cx('container')}>
        <div className={cx('feature-wrapper')}>
        <label>Công cụ</label>
        <div className={cx('calc-grid')}>
            <div className={cx('atom-area')}>
            <Paper className={cx('form-atom')} >
                  <TextField className={cx('input')} variant='standard' label='Number of protons (Z)' fullWidth onChange={handleZ}/>
                  <TextField className={cx('input')} variant='standard' label='Number of neutrons (N)' fullWidth onChange={handleN}/>
                  <TextField className={cx('input')} variant='standard' label='Atomic Mass'fullWidth disabled value={parseInt(Z)+parseInt(N)}/>
                  <TextField className={cx('input')} variant='standard' label='Atomic Mass (SI)'fullWidth disabled value={ (parseInt(Z)+parseInt(N) +1.982 ) +"10^-27 kg"}/>
                  <TextField className={cx('input')} variant='standard' label='Mass number'fullWidth disabled value={Z+N}/>
                  <div className={cx('submit')}>
                          <RecyclingIcon className={cx('btn')} />
                  </div>
            </Paper>   
            </div>
            <div className={cx('info-area')}>
                 <label>Atom Mass Calculator</label>
                 <p>This atomic mass calculator shows you how to find the atomic mass of an atom using the atomic mass formula and explains the atomic mass definition. It also describes the atomic mass unit and explores why an atom needs neutrons. </p>
                 <div className={cx('table-preference')}>
                     <label>More info</label>
                     <Link href="#" underline="hover">What is an atom ?</Link>
                     <Link href="#" underline="hover">Atomic number , Atomic mass?</Link>
                     <Link href="#" underline="hover">How to calculate the atomic number, mass and charge?</Link>
                 </div>
            </div>
            <div className={cx('result-area')}>
                   <label className={cx('element')}>Atomic symbol</label>
            </div>
        </div>
        </div>
    </div>
  ) 
}

export default CalcAtomMass