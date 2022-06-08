import logoImg from '../../assets/logo.svg';
import { Container, Content } from './Styles';
import Modal from 'react-modal';

interface ModalProps {
  onOpenNewTransactionModal: () => void;
}


export function Header({onOpenNewTransactionModal}: ModalProps){
    
    return(
       <Container>
           <Content>
             <img src={logoImg} alt="Logo dt-money" />
             <button type="button" onClick={onOpenNewTransactionModal}>
                 Nova transação
             </button>
             </Content>
        </Container> 
    )




}