
import './App.css';
import { Article, Aboutus , Marketplace, Navbar, Footer} from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Article/>
      </div>
      <Marketplace/>
      <Aboutus/>asdasd
      <Footer/>
    </div>
  );
}

export default App;
