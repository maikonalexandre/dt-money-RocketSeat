import Modal from 'react-modal';
import { Container, TransactiosTypeContainer, RadioBox } from './styled';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose:() => void;
}


export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){
   const [title,  setTitle] = useState('');
   const [value, setValue] = useState(0);
   const [category,  setCategory] = useState('');


    const [type, setType] = useState('deposit');

   function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();

        const data = {
            title,
            value, 
            category, 
            type
        };
        api.post('/transactions', data)
        console.log(data);
   }
   
   
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-mmodal-overlay"
        className="react-content"
        >
            
        <button type='button' 
        onClick={onRequestClose}
        className="react-modal-close"
        >
            <img src={closeImg} alt="Feachar modal" />
        </button>

            <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>
                <input
                 placeholder='Titulo' 
                 value={title}
                 onChange={event => setTitle(event.target.value)}
                 />

                <input
                 type="number"
                 placeholder='Valor'
                 value={value}
                 onChange={event => setValue(Number(event.target.value))}
                 />

                <TransactiosTypeContainer>
                <RadioBox
                type='button'
                onClick={() => {setType('deposit')}}
                isActive={type === 'deposit'}
                isActiveColor="green"
                >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
                </RadioBox>


                <RadioBox
                type='button'
                onClick={() => {setType('withdraw')}}
                isActive={type === 'withdraw'}
                isActiveColor="red"
                >
                <img src={outcomeImg} alt="Saida" />
                <span>Saida</span>
               </RadioBox>
                </TransactiosTypeContainer>

                <input
                 placeholder='Categoria'
                 value={category}
                 onChange={event => setCategory(event.target.value)} 
                 />

                 <button type="submit">Cadastrar</button>
            </Container>
        </Modal>

    )
}