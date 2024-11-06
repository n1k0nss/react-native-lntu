import { useState } from 'react';
import style from './styles.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Counter can't be negative");
    }
  };

  const reset = () => setCount(0);

  return (
    <div className={style.CounterBox}>
      <h2 className={style.CounterTitle}>Counter: {count}</h2>
      <button className={`${style.CounterButton} ${style['CounterButton--add']}`} onClick={increase}>Increase</button>
      <button className={`${style.CounterButton} ${style['CounterButton--remove']}`} onClick={decrease}>Decrease</button>
      <button className={`${style.CounterButton} ${style['CounterButton--reset']}`} onClick={reset}>Reset</button>
    </div>
  );
}
