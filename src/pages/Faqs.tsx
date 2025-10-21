import '.././App.css'
import Crumbs from '../components/Crumbs';
import FAQBody from '../sections/FAQBody';
import FAQHeader from '../sections/FAQHeader';

function Faqs() {
  return (
    <div>
<Crumbs pageName="FAQs" />
<FAQHeader title="Frequently Asked Questions" />
      <FAQBody />
    </div>
  );
}

export default Faqs
