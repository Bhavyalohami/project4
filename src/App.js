import Header from "./components/Header";
import Home from "./components/Home";
import "./styles/app.scss"
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Cart from "./components/Cart";
import About from "./components/About";
import Support from "./components/Support";
import Collections from "./components/Collections";
import Journal from "./components/Journal";
import TradeIn from "./components/TradeIn";
import Footer from "./components/Footer";
import Deals from "./components/Deals";
import Compare from "./components/Compare";
import Services from "./components/Services";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/collections" element={<Collections />}/>
        <Route path="/deals" element={<Deals />}/>
        <Route path="/compare" element={<Compare />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/journal" element={<Journal />}/>
        <Route path="/trade-in" element={<TradeIn />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <Toaster/> 
    </BrowserRouter>
  );
}

export default App;
