import addFinanceiro from "../../controllers/financeiro.controllers/addFinanceiro.js";
import deleteFinanceiro from "../../controllers/financeiro.controllers/deleteFinanceiro.js";
import getFinanceiro from "../../controllers/financeiro.controllers/getFinanceiro.js";
import updateFinanceiro from "../../controllers/financeiro.controllers/updateFinanceiro.js";

const financeiroRouter = async (app) => {
  // rotas de adicao, update, get e delete de financeiro
  app.get('/financeiro', getFinanceiro);
  app.post('/financeiro/:id', addFinanceiro);
  app.put('/financeiro/:id', updateFinanceiro);
  app.delete('/financeiro/:id', deleteFinanceiro);
} 

export default financeiroRouter;