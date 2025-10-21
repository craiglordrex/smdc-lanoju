import '.././App.css'
import Crumbs from '../components/Crumbs';
import FAQHeader from '../sections/FAQHeader';
import FAQInnerBody from '../sections/FAQInnerBody';

function InnerFAQS() {
  const title = "FAQs";

  return (
    <div>
      <Crumbs pageName="FAQs" title={title} />
      <FAQHeader title={title}  />
      <FAQInnerBody />
    </div>
  );
}

export default InnerFAQS;
