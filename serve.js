import fastify from 'fastify';
import userRouter from './src/routes/user.routes/Users.js';
import financeiroRouter from './src/routes/financeiro.routes/Financeiro.js';
import debitosRouter from './src/routes/debitos.routes/Debitos.js';

const app = fastify();

// Registra o plugin fastify-cors
app.addHook('onRequest', (request, reply, done) => {
  const allowedOrigin = 'http://localhost:5173'; // Domínio permitido
  reply.header('Access-Control-Allow-Origin', allowedOrigin);
  reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (request.method === 'OPTIONS') {
    return reply.status(200).send();
  }

  done();
});

// Defina suas rotas
userRouter(app);
financeiroRouter(app);
debitosRouter(app);

const port = process.env.PORT || 3333;
app.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});