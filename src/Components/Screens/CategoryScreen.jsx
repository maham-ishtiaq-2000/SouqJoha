import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';
import Categories from '../../Components/Categories/Categories';


const CategoryScreen = () => {
  return(
    <>
      <Header></Header>
      <Categories></Categories>
      <Footer></Footer>
      <Footer2></Footer2>
  </>
  )
}
 
export default CategoryScreen;
