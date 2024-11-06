import {useState} from 'react';
import style from './styles.module.scss';
import FruitsList from './includes/FruitsList';
import FruitsCounter from './includes/FruitsCounter';

export default function Fruits() {
  const [fruits, setFuits] = useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
  ]);

  return (
    <div className={style.FruitsWrapper}>
      <h1 className={style.FruitsTitle}>Куди має йти стан?</h1>
      
      <FruitsList fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}
