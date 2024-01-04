const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();
const connectionString = process.env.DATABASE_URL

// ==> Conexão com a Base de Dados:
const pool = new Pool ( {  
    connectionString ,
  } )



pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
    });


module.exports = {
  query: (text, params) => pool.query(text, params),
};