import { useState } from "react";
import "./styles.css";

const CASES_INFO = [
  // {
  //   id: "01",
  //   title: "расставание",
  //   request:
  //     "Расставание. Клиентка после расставания с молодым человеком была уверена, что не сможет найти “такую любовь” больше никогда. Была подавлена и потеряна. Находилась в позиции жертвы.",
  //   process:
  //     "Клиентка проработала страхи одиночества и образ бывшего партнера. Оказалось, что бывший молодой человек был нарциссом и морально подавлял её. Подняла самооценку и собственную важность. Выполняла домашние задания и это существенно помогло ускорить процесс.",
  //   result:
  //     "Пришло понимание того, что бывший партнер не являлся единственным. Клиентка начала жить своей жизнью и смогла вступить в новые отношения без привязки к предыдущим.",
  // },
  {
    text: [
      `Марина, добрый вечер! ❄️❄️❄️😇
Сегодня случилось чудо! 🔮🙏🏻😇Вы будто разбудили меня от долгой спячки! 😴 Не смотря ни на что, у Вас получилось развернуть меня к самой себе, обратиться к внутреннему и глубокому,найти боль и показали путь!📖📚💫🔮`,
      'С Вами я смогла то,что не позволяла себе и даже запрещала🙏🏻😇 Ваша тактичность и участие,полное погружение в процессс вместе со мной,ощутилось как новорождение... 🥰☀️Благодарю Вас!💫😇',
    ],
    id: "01",
  },
  {
    text: [
      `Марина, добрый день!
      Магия уже на следующий день после нашей практики начала происходить✨💫 🪄
      В пятницу на практике я почувствовала себя иначе, - что я ДОВОЛЬНА СОБОЙ, и тем, что Я В ЖИЗНИ ДЕЛАЮ, и тем, как Я ПОСТУПАЮ, и что ДВИГАЮСЬ В ПРАВИЛЬНОМ НАПРАВЛЕНИИ. `,
      `В общем, что-то во мне изменилось совершенно точно и это где-то глубоко внутри меня.
      Я стала спокойнее и увереннее в себе.💖❤️💝
      Марина, БлагоДарю Вас за эту практику и за эти изменения во мне!!!🙏🏻🥰❤️🤗`,
    ],
    id: "02",
  },
  {
    text: [
      `Дорогая Марина, благодарю Вас за Вашу помощь в консультации.
    Проживание по методу цоп получается не всегда, но под вашим бережным и чутким руководством удается проживать и осознавать уроки. Благодарю сердечно за принятие и нужные слова для моего развития`,
    ],
    id: "03",
  },
  {
    text: [
      `Мариночка, хочу поблагодарить тебя ещё раз за вчерашнюю сессию. 
    Я сегодня уже пришла в себя, прожила вчерашний опыт. И хочу выразить тебе благодарность за твою чуткость, профессионализм и внимательность. 
    Метод ЦОП в миксе с регресс терапией - это мегаКОМБО))) 
    Спасибо тебе 🙏💖`,
    ],
    id: "04",
  },
  {
    text: [
      `Марина, добрый вечер😊
      Благодарю тебя за консультацию, за твою сердечность, терпение, заинтересованность😊❤️`,
      `За возможность разложить внутри меня по полочкам и развернуться Тула куда меня направляет судьба🙏`,
    ],
    id: "05",
  },
  
];

const Case = ({ caseInfo }) => {
  const { id, text } = caseInfo;
  return (
    <div className="case-card">
      {/* <div className="case-card__title-container">
        <div className="case-card__number card-id">
          {id}
        </div>
        <p className="card-title">{`Кейс: ${title}`}</p>
      </div>
      <div className="case-card__text-block">
        <p className="block-title">ЗАПРОС</p>
        <hr className="splitter" />
        <p className="paragraph">{request}</p>
      </div>
      <div className="case-card__text-block">
        <p className="block-title">ПРОЦЕСС</p>
        <hr className="splitter" />
        <p className="paragraph">{process}</p>
      </div>
      <div className="case-card__text-block">
        <p className="block-title">РЕЗУЛЬТАТ</p>
        <hr className="splitter" />
        <p className="paragraph">{result}</p>
      </div> */}
      {text.map(str => <p className="paragraph">{str}</p>)}
    </div>
  );
};

const Cases = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleShowMoreClick = () => {
    setIsExpanded(true);
  };

  const renderCards = () => {
    const casesToRender = isExpanded
      ? CASES_INFO.slice()
      : CASES_INFO.slice(0, 2);
    return casesToRender.map((caseInfo, ind) => (
      <Case key={ind} caseInfo={caseInfo} />
    ));
  };

  return (
    <div className="cases-section-box">
      <div className="cases-container">{renderCards()}</div>
      {!isExpanded && <button
        className="show-more-btn block-title"
        onClick={handleShowMoreClick}
      >
        Показать ещё
      </button>}
    </div>
  );
};

export default Cases;
