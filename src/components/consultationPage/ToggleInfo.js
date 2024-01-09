import { useState } from "react";

const SECTIONS_INFO = [
  {
    first: {
      title: 'О чем будем говорить?',
      paragraph: 'Я уточню или помогу определить ваш запрос, мягко и деликатно подведу вас к волнующим темам. Мы поймем, какого результата вы хотите добиться и расставим приоритеты: определимся, над чем будем работать в первую очередь и построим дальнейшую структуру сессий.',
    },
    second: {
      title: 'Мой подход',
      paragraph: 'Я не решаю за клиента, поэтому желаемый результат определяете только вы сами. Я не навязываю свою картину мира, а отталкиваюсь от поставленного запроса. Но если вы не понимаете к чему хотите прийти — помогу понять и разобраться.',
    },
  },
  {
    first: {
      title: 'Методики работы',
      paragraph: 'В зависимости от запроса и конкретных пожеланий я подберу техники для проработки вашей проблемы. Я не ограничиваюсь одной методикой в работе с клиентами, во время сессии подбираю индивидуальный подход к каждому. Никаких шаблонов и сухой информации.',
    },
    second: {
      title: 'Сколько понадобится сессий?',
      paragraph: 'Для более глубокой проработки вашего запроса я даю домашние задания, которые ускорят процесс и повысят качество ваших изменений.',
    },
  },
]

const InfoSection = ({info}) => {
  const {title, paragraph} = info;
  return (
    <div className="info-container">
      <p className="info-container__title">
        {title}
      </p>
      <p className="info-container__paragraph">
        {paragraph}
      </p>
    </div>
  )
}

const ToggleInfo = () => {
  const [pageNumber, setPage] = useState(0);
  const handleFirstToggler = () => {
    setPage(0);
  };
  const handleSecondToggler = () => {
    setPage(1);
  };

  return ( 
    <div className="toggle-container">
      <div className="block-chooser">
        <button className="block-chooser__btn" onClick={handleFirstToggler}>Первая сессия</button>
        <button className="block-chooser__btn" onClick={handleSecondToggler}>Последующие сессии</button>
      </div>
      <div className="block-info">
        <InfoSection info={SECTIONS_INFO[pageNumber].first} />
        <InfoSection info={SECTIONS_INFO[pageNumber].second} />
      </div>
    </div>
   );
}
 
export default ToggleInfo;