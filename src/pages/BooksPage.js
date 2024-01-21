import PageHeader from "../components/pageHeader/PageHeader";

const PAGEHEADER_TEXT = `
  Много лет назад я написала своё первое стихотворение. Сейчас я регулярно провожу творческие вечера, а мои стихи можно увидеть как в книгах под моим авторством, так и в областных изданиях.  
  `;
const PAGENAME = 'книги';

const BooksPage = () => {
  return ( 
    <div className="main-bg">
      <PageHeader text={PAGEHEADER_TEXT} pageName={PAGENAME} type='product'/>
    </div>
  );
}
 
export default BooksPage;