import './App.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Suspense, lazy } from 'react';
import Loader from './Loader';
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Main = lazy(() => import("./Components/Main/Main"));
const Pages = lazy(() => import("./Components/Pages/Pages"));





function App() {
  return (
    <Suspense fallback={<Loader/>}>

    <div className='app'>
      <Main/>

      <div className='about'>
        <Pages/>
      </div>
      <Footer/>
      <FloatingWhatsApp
        phoneNumber="+923437009415"
        accountName="Zaman"/>
    </div>
    </Suspense>

  );
}

export default App;
