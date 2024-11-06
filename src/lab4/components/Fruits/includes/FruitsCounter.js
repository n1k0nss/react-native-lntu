import style from './styles.module.scss';

export default function FruitsCounter({fruits}) {
    return (
        <h2 className={style.FruitsCounter}>Всього фруктів: <span>{fruits.length}</span></h2>
      );
  }