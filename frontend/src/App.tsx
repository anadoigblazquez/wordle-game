import './App.css';

import Board from './components/Board';
import KeyBoard from './components/KeyBoard';
import EndOffGameMessage from './components/EndOffGameMessage';
import Header from './components/Header';
import Footer from './components/Footer';

import DataProvider from './context/DataProvider';

function App() {
  

  return (
    <DataProvider>
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
          <EndOffGameMessage />

        </main>

        <Footer />
      
    </DataProvider>
  )
}

export default App
