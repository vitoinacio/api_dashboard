import fastify from 'fastify';
import fastifyCors from 'fastify-cors'; // Importa o plugin fastify-cors
import userRouter from './src/routes/user.routes/Users.js';
import financeiroRouter from './src/routes/financeiro.routes/Financeiro.js';
import debitosRouter from './src/routes/debitos.routes/Debitos.js';

const app = fastify();

// Registra o plugin fastify-cors
app.register(fastifyCors, {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

// app.addHook('onRequest', (request, reply, done) => {
//   reply.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//   reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   done();
// });

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