import style from './styles.module.scss';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className={style.Navigation}>
      <ul className={style.NavigationList}>
        <li className={style.NavigationItem}><Link className={style.NavigationILink} to="/">Головна сторінка</Link></li>
        <li className={style.NavigationItem}><Link className={style.NavigationILink} to="/media">Зображення і відео</Link></li>
        <li className={style.NavigationItem}><Link className={style.NavigationILink} to="/about">Про програму</Link></li>
        <li className={style.NavigationItem}><Link className={style.NavigationILink} to="/calculator">Калькулятор</Link></li>
      </ul>
    </nav>
  );
}