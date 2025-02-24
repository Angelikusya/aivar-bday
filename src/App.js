import React, { useState } from "react";
import "./App.css";
import photo1 from './assets/1.webp';
import photo2 from './assets/2.webp';
import photo3 from './assets/3.webp';
import photo4 from './assets/4.webp';
import photo5 from './assets/5.webp';
import photo6 from './assets/6.webp';
import photo7 from './assets/7.webp';
import photo8 from './assets/8.webp';
import photo9 from './assets/9.webp';
import photo10 from './assets/10.webp';
import photo11 from './assets/11.webp';
import photo12 from './assets/12.webp';
import photo13 from './assets/13.webp';
import photo14 from './assets/14.webp';
import photo15 from './assets/15.webp';
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import back from './assets/back-1.webp'; // ковер
// import back from './assets/back-2.webp'; // эчпочмаки
// import back from './assets/back-3.webp'; // много фото
// import back from './assets/back-4.webp'; // лицо

const phrases = [
  { text: "Оставайся всегда на стиле и на раслабоне", image: photo1 },
  { text: "Помни, что бизнес - это не про стандартные решения", image: photo2 },
  { text: "Радуйся жизни так же, как и этому макарунс!", image: photo3 },
  { text: "Изучи назначение скалки (по возможности)", image: photo4 },
  { text: "Прежде, чем сдавать работу, проверь, нет ли багов", image: photo5 },
  { text: "Что за зверь этот тигр?", image: photo6 },
  { text: "Помни, что можно прочитать все книги мира, а вот с пивом надо будет постараться", image: photo7 },
  { text: "Помни, что свобода - это условность. Ты свободен скакать на коне, а конь в поле не свободен @Джейсон Стетхэм", image: photo8 },
  { text: "Помни, что даже король тебе может завидовать", image: photo9 },
  { text: "Доверяй судьбе так же, как и этим штанам", image: photo10 },
  { text: "Желаю чтобы, в каком бы ты не был городе - диван был мягкий", image: photo11 },
  { text: "Смотри на мир под своим углом", image: photo12 },
  { text: "Не забывай, что отращивать волосы можно только когда ты уже 2 года как женат, раньше могут не понять", image: photo13 },
  { text: "Желаю твоей женушке счастья, потому что счастливая жена - счастливый муж", image: photo14 },
  { text: "Если вдруг ты снова надумаешь отращивать усы, посмотри на это фото и передумай", image: photo15 },
];

function App() {
  const [phrase, setPhrase] = useState("");
  const [image, setImage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); // Состояние для отслеживания клика
  const [prevIndex, setPrevIndex] = useState(null); 
  const { width, height } = useWindowSize();

  const handleClick = () => {
    let randomIndex;
    
    // Генерируем новый индекс, пока он не будет отличаться от предыдущего
    do {
      randomIndex = Math.floor(Math.random() * phrases.length);
    } while (randomIndex === prevIndex); // Проверка, чтобы индекс не совпал с предыдущим
    
    setPrevIndex(randomIndex); // Сохраняем текущий индекс как предыдущий

    setPhrase(phrases[randomIndex].text);
    setLoading(true);
    const img = new Image();
    img.src = phrases[randomIndex].image;
    img.onload = () => {
      setImage(phrases[randomIndex].image);
      setLoading(false);
    };
    if (!showConfetti) {
      setShowConfetti(true);
    }
    setButtonClicked(true);
  };

  return (
    <div className="app-container">
      <div className="background">
        <img src={back} alt="background" className="background-image" />
      </div>
      {showConfetti && <Confetti width={width} height={height} recycle={true} />} 
      <div className="content">
        <button
          className={`btn ${buttonClicked ? "btn-clicked" : ""}`} // Добавляем класс в зависимости от клика
          onClick={handleClick}
        >
          <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span className="text">{loading ? "Загружаю..." : "Поздравить Айвара"}</span>
        </button>
        {phrase && !loading && (
          <div className="message-container">
            <p className="message-text">{phrase}</p>
            <img src={image} alt="birthday" className="message-fullscreen-image" />
          </div>
        )}
      </div>
      <div className="background-animation">
        <div className="currency-effect left"></div>
        <div className="currency-effect right"></div>
      </div>
    </div>
  );
}

export default App;