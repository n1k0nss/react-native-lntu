import { useState } from 'react';
import style from './styles.module.scss';

export default function TextInput({ onTextChange }) {
    const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(text);
    onTextChange(text); 
  };

  const handleChange = (event) => {
    if (event.target.value.length <= 50) {
      setText(event.target.value);
      onTextChange(event.target.value);
    } else {
      alert("Не можна перевищувати більше 50 символів");
    }
  };

  return (
    <div className={style.TextBox}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text"
        className={style.TextInput}
      />
      <button className={style.TextButton} onClick={handleSubmit}>Submit</button>
      <p className={style.TextResult}>Submitted Text: <span>{submittedText}</span></p>
    </div>
  );
}
