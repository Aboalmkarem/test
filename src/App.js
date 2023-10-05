import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
    </div>
    
  )
}

export default App;
