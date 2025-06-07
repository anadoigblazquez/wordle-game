import './App.css';

import Board from './components/Board';
import KeyBoard from './components/KeyBoard';
import FailMessage from './components/FailMessage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
        <Header />

        <main className="
          container 
          flex 
          justify-center 
          flex-col
          content-center
          flex-wrap
          text-gray-800">

          <Board  />
          <KeyBoard />
          <FailMessage />

        </main>

        <Footer />
      
    </>
  )
}

export default App
