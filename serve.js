import fastify from 'fastify';
import userRouter from './src/routes/user.routes/Users.js';
import financeiroRouter from './src/routes/financeiro.routes/Financeiro.js';
import debitosRouter from './src/routes/debitos.routes/Debitos.js';

const app = fastify();
app.use(cors());

// rota de usuario
userRouter(app);

// rota de entrada financeira
financeiroRouter(app);

// rota para manipulacao de debitos
debitosRouter(app);


const port = process.env.PORT || 3333;
app.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});