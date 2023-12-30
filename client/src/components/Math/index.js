import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import {MathJax,MathJaxContext} from 'better-react-mathjax'
let cx = classNames.bind(styles);
const MathComponent = ({equation}) => {
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [["$", "$"]],
      displayMath: [["$$", "$$"]]
    }
  };

  return (
    <div className={cx('container')}>
    <MathJaxContext config={config} version={3} >
      <MathJax inline>
        {equation}
      </MathJax>
    </MathJaxContext>
    </div>
  );
  };
  
  export default MathComponent;