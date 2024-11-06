import style from './styles.module.scss';

export default function NumbersGame() {
    function handleClick() {
        const userInput = prompt("Введіть число від 1 до 5");
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        alert(`Ви вказали число: ${userInput}, число комп’ютера: ${randomNumber}`);
      }
    
      return (
        <div className={style.NumbersBox}>
          <h1 className={style.NumbersTitle}>Вкажіть будь-яке число від 1 до 5</h1>
          <button className={style.NumbersButton} onClick={handleClick}>Почати</button>
        </div>
      );
}
