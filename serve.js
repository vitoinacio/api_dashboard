import fastify from 'fastify';
import userRouter from './src/routes/user.routes/Users.js';
import financeiroRouter from './src/routes/financeiro.routes/Financeiro.js';
import debitosRouter from './src/routes/debitos.routes/Debitos.js';
import fastifyCors from 'fastify-cors';

const app = fastify();
app.use(cors());

app.register(fastifyCors, {
  origin: ['http://localhost:5173'], // Permite apenas requisições do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
});

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