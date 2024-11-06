import style from './styles.module.scss';
import {Suspense} from 'react';
import Image from '../assets/amnyam.jpg';
import DynamicImageSource from '../assets/dynamic.jpg'

function DynamicImage() {
    return <img src={DynamicImageSource} alt='dynamic'></img>;
}

export default function Media() {
    return (
        <div className={style.MediaWrapper}>
          <h1 className={style.MediaTitle}>Зображення і відео</h1>
          <div className={style.MediaBox}>
            <h3>Локальне зображення:</h3>
            <img src={Image} alt="Local" />
          </div>
          <div className={style.MediaBox}>
            <h3>Зовнішнє зображення:</h3>
            <img src="https://images.unsplash.com/photo-1729592088218-02a52acb3547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" alt="External" />
          </div>
          <div className={style.MediaBox}>
            <h3>Динамічне зображення:</h3>
            <Suspense fallback={<p>Завантаження зображення...</p>}>
              <DynamicImage />
            </Suspense>
          </div>
          <div className={style.MediaBox}>
            <h3>Відео:</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AxE4TltnvjI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      );
}