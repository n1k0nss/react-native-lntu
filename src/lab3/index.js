import style from './styles.module.scss';
import Heading from './components/Heading';
import Subject from './components/Subject';

function LabThree() {
  return (
    <>
      <Heading firstName='Костя'/>
      <h1 className={`${style.title} ${style['title--h2']}`}>Список ваших дисциплін у семестрі:</h1>

      <div className={style.subjects}>
        <Subject className={style.subject} subjectName="React Native" description="Вибіркова дисципліна"/>
        <Subject className={style.subject} subjectName="Flutter" description="Основна дисципліна"/>
        <Subject className={style.subject} subjectName="Typescript" description="Вибіркова дисципліна"/>
      </div>
    </>
    
  );
}

export default LabThree;