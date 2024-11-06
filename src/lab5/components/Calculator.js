import style from './styles.module.scss';
import { useState } from 'react'

export default function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
  
    const handleInput = (e) => {
      setInput(e.target.value);
    };
  
    const calculate = () => {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    };
  
    const clearInput = () => {
      setInput('');
      setResult(null);
    };
  
    return (
      <div className={style.CalculatorBox}>
        <h1 className={style.CalculatorTitle}>Калькулятор</h1>
        <div>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Введіть вираз, наприклад 2+2"
          className={style.CalculatorInput}
        />
        <button className={style.CalculatorButtonCalculate} onClick={calculate}>Обчислити</button>
        <button className={style.CalculatorButtonReset} onClick={clearInput}>Очистити</button>
        </div>
        <div>
          <h2>Результат: {result !== null ? result : '-'}</h2>
        </div>
      </div>
    );
}
