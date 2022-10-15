import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import NavHeader from './pages/components/NavHeader';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import NewsPage from './pages/News';
import SalePage from './pages/Sale';
import AdminPage from './pages/Admin';
import ProductPage from './pages/Product';
import DetailProduct from './pages/ProductComponent/DetailProduct'
import CartPage from './pages/Cart';
import Footer from './pages/components/Footer';

function App() {


  return (
    <div className="App">
      <div className="nav-container">
        <NavHeader/>
        <nav>
            <ul>
              <li className= "menu-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className= "menu-item">
                <Link to="/about">Liên hệ</Link>
              </li>
              {/* <li className= "menu-item">
                <Link to="/contact">Contact</Link>
              </li> */}
              <li className= "menu-item">
                <Link to="/news">Tin tức</Link>
              </li>
              <li className= "menu-item">
                <Link to="/product">Tất cả sản phẩm</Link>
              </li>
            </ul>

        </nav>
      </div>
      <div className="temp">
        
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/product" element={<ProductPage />}>
        </Route>
        <Route path=":id" element={<DetailProduct />}/>
        <Route path="/cart" element={<CartPage />}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
