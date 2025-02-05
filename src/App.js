import React, { useState } from "react";
import "./App.css";
import photo1 from './assets/1.jpeg';
import photo2 from './assets/2.jpeg';
import photo3 from './assets/3.jpeg';
import photo4 from './assets/4.jpeg';
import photo5 from './assets/5.jpeg';
import photo6 from './assets/6.jpeg';
import photo7 from './assets/7.jpeg';
import photo8 from './assets/8.jpeg';
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import back from './assets/back-2.jpg';

const phrases = [
  { text: "Желаем твоей женушке счастья, потому что счастливая жена - счастливый муж @Анжелика", image: photo1 },
  { text: "Пей побольше орандж джус вместе с текилой, они повышают иммунитет", image: photo2 },
  { text: "Высыпайся! ", image: photo3 },
  { text: "Продолжай оставаться самураем, но не делай харакири после работы (по возможности)", image: photo4 },
  { text: "Пусть проблемы будут не больше этого унитаза", image: photo5 },
  { text: "Пусть кофе всегда будет вкусным и горячим", image: photo6 },
  { text: "Оставайся всегда таким же молодым и красивым", image: photo7 },
  { text: "Не забывай, что всегда можно будет пойти работать двойником Павла Дурова", image: photo8 }
];

function App() {
  const [phrase, setPhrase] = useState("");
  const [image, setImage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowSize();

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
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
  };

  return (
    <div className="app-container">
      <div className="background">
        <img src={back} alt="background" className="background-image" />
      </div>
      {showConfetti && <Confetti width={width} height={height} recycle={true} />} 
      <div className="content">
        <button className="btn" onClick={handleClick}>
          <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span className="text">{loading ? "Загружаю..." : "Поздравить Диму"}</span>
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
