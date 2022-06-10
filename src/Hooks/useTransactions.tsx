import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transactions {
    id:number;
    title:string;
    type: string;
    category:string;
    amount:number;
    createdAt: string;
}
interface TransactionProviderProps{
    children: ReactNode;
}
interface TransactionContextData{
    transactions: Transactions[];
    creatTransaction: (transaction: TransactionInput)=> Promise<void>;
}


type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;


 const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
    );

export function TransactionsProvider({children}: TransactionProviderProps){

const [transactions, setTransactions] = useState<Transactions[]>([]);

useEffect(() => {
   api.get('/transactions')
   //important response.data.transactions esta retornando os objetos
   .then(response => setTransactions(response.data.transactions));

}, []);

async function creatTransaction(transactionInput: TransactionInput){
 const response = await  api.post('/transactions', {
    ...transactionInput,
    createdAt: new Date(),
 })
 const { transaction } = response.data;

 setTransactions([
    ...transactions,
    transaction,
 ])
}



return(
    <TransactionContext.Provider value={{transactions, creatTransaction}}>
            {children}
    </TransactionContext.Provider>
)
}

export function useTransactions(){
    const context =  useContext(TransactionContext);
    return context;
}

