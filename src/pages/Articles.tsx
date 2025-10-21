import '.././App.css'
import Crumbs from '../components/Crumbs';
import PropertiesHeader from '../sections/PropertiesHeader';
import HeaderImg from '../assets/temp_prptHeader.png'
import ArticlesBody from '../sections/ArticlesBody'

function Articles() {
  return (
    <div>
      <Crumbs pageName="Articles" />
      <PropertiesHeader
            imageSrc={HeaderImg}
            heading="Articles"
            description="Insights, trends, and tips to help you navigate real estate with ease."
          />  
      <ArticlesBody />
    </div>
  );
}

export default Articles
