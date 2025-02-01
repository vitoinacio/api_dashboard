import fastify from 'fastify';
import userRouter from './src/routes/user.routes/Users.js';

const app = fastify();

userRouter(app);

const port = process.env.port || 3333;
app.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});