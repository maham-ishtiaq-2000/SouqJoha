import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import DailyDeals from '../Products/DailyDeals';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';


const MainScreen = () => {
  return(
    <>
      <Header screen="mainScreen"></Header>
      <DailyDeals></DailyDeals>
      <Products></Products>
      <Footer></Footer>
      <Footer2></Footer2>
  </>
  )
}
 
export default MainScreen;
