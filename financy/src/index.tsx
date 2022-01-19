import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
        id: 1,
        title: 'WebSite',
        type: 'deposit',
        amound: 6000,
        category: 'Trabalho',
        created: new Date(),
      },
      {
        id: 2,
        title: 'Alguel',
        type: 'withdraw',
        category: 'Casa',
        amound: 1200,
        created: new Date(),
      }
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transaction', () => {
      return this.schema.all('transaction');
    })

    this.post('transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
