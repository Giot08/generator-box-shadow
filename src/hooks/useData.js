import { useState } from 'react';
import data from '../data';

const useData = () => {
  const [inputData, setInputData] = useState([...data]);
  const [shadow, setShadow] = useState(
    'box-shadow: 10px 10px 10px 10px rgba(0,0,0,1);',
  );
  const [color, setColor] = useState('0,0,0,1');
  const [values, setValues] = useState('10px 10px 10px 10px');

  function handleInputData(val, label) {
    let cssString = "";
    if (label !== 'color') {
      setInputData(
        inputData.map((item) => {
          if (item.label === label) {
            item.value = Number(val);
            return item;
          }
          return item;
        }),
      );
      inputData.forEach((item) => {
        cssString += `${item.value}px `;
      });
      setValues(cssString)
    } else {
      const getAlpha = (n) => {
        const len = String(n).length;
        let alpha = 1
        len > 1 ? alpha = Number(n).toFixed(2) :
        alpha = n 
        return alpha
      }

      setColor(`${val.r},${val.g},${val.b},${getAlpha(val.a)}`);
    }
    setShadow(`box-shadow: ${values} rgba(${color});`);
  }

  return {
    inputData,
    handleInputData,
    shadow,
  };
};

export default useData;
