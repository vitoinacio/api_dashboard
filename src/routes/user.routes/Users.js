import getUsers from "../../controllers/users.controllers/getUsers.js";
import addUsers from "../../controllers/users.controllers/addUsers.js";
import deleteUser from "../../controllers/users.controllers/deleteUser.js";
import updateUser from "../../controllers/users.controllers/updateUsers.js";
import addUserFoto from "../../controllers/users.controllers/addUserFoto.js";
import twoFaUser from "../../controllers/users.controllers/twoFaUser.js";

const userRouter = async (app) => {
  // rotas principais de vizualizaçao, cadastro, update e delete de usuarios
  app.get('/users', getUsers);
  app.post('/users', addUsers);
  app.put('/users/:id', updateUser);
  app.delete('/users/:id', deleteUser);

  // rota para adicao e update de foto
  app.put('/users/foto/:id', addUserFoto);

  // rota para ativar ou desativar verificação de duas etapas
  app.put('/users/twoFa/:id', twoFaUser);
}

export default userRouter;