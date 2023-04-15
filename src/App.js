import './App.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Suspense, lazy } from 'react';
import Loader from './Loader';
import digitalmarketer from "./images/digitalmarketer.png"

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
      <FloatingWhatsApp
        phoneNumber="+923437009415"
        accountName="Zaman"
        statusMessage="Replies within 15 minutes"
        chatMessage="Hello there! How can I help you ?"
        avatar={digitalmarketer}
        chatboxHeight={350}
        buttonClassName="floating-whatsapp-button"
chatboxStyle={width: "100px"}
        />
      <Footer/>

    </div>
    </Suspense>

  );
}

export default App;
