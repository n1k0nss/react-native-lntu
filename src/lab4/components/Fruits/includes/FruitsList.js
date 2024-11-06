import style from './styles.module.scss';

export default function FruitsList({fruits}) {
    return (
        <ul className={style.FruitsList}>
          {fruits.map(f => (
            <li className={style.FruitsListItem} key={f.id}>{f.fruitName}</li>
          ))}
        </ul>
      );
}
