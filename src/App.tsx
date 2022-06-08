
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/index";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from 'react';
import {NewTransactionModal} from './components/NewTransactionModal/index'

Modal.setAppElement('#root');


//Exportando dessa maneira me 
//obriga a colocar o mesmo nome da funçao
export function App() {
  const [isNewTableTransactionModal, setIsNewTableTransactionModal] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTableTransactionModal(true);
    }
    function handleCloseNewTransactionModal(){
        setIsNewTableTransactionModal(false);
    }


  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Dashboard/>
    <NewTransactionModal
    isOpen={isNewTableTransactionModal}
    onRequestClose={handleCloseNewTransactionModal}
    />
    <GlobalStyle />
    </>
  );
}
