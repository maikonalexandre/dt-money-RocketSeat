import React from 'react';
import ReactDOM from 'react-dom/client'
import {createServer, Model} from 'miragejs'
import {App} from './App';

createServer({
models:{
  transaction: Model,

},

seeds(server){
  server.db.loadData({
    transactions:[
      {
        id:1,
        title:'Freelancer web',
        type: 'deposit',
        category:'Dev',
        amount:1000,
        createdAt: new Date('2021-02-12 09:00:08'),
      },
      {
        id:2,
        title:'Casa',
        type: 'deposit',
        category:'Dev',
        amount:1200,
        createdAt: new Date('2021-02-12 09:00:08'),
      }
    ]
  })
},

  routes(){
        this.namespace = 'api';

        this.get('/transactions', () => {
        return this.schema.all('transaction')
        }  
      )
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
      })
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <App />
 
);
