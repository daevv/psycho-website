import PageHeader from "../components/pageHeader/PageHeader";

const PAGEHEADER_TEXT = `
  Вы слышали про метафорические карты? А что если я скажу вам, что придумала к ним новых подход?   
  `;
const PAGENAME = 'карты';

const CardsPage = () => {
  return (
    <div className="main-bg">
      <PageHeader pageName={PAGENAME} text={PAGEHEADER_TEXT} type='product'/>
    </div>
  );
};

export default CardsPage;
