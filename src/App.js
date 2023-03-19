import './App.css';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Pages from './Components/Pages/Pages';

function App() {
  return (
    <div className='app'>
      <Main/>

      <div className='about'>
        <Pages/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
