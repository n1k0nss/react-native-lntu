import { useState } from 'react';
import Counter from './includes/Counter';
import TextInput from './includes/TextInput';
import style from './styles.module.scss';


export default function TextAndCounter() {
  const [characterCount, setCharacterCount] = useState(0);

  const handleTextChange = (text) => {
    setCharacterCount(text.length);
  };

  return (
    <div>
      <Counter />

      <h1 className={style.Characters}>Number of characters: {characterCount}</h1>
      <TextInput onTextChange={handleTextChange} />
    </div>
  );
}
