import getDebitos from "../../controllers/debitos.controllers/getDebitos.js";
import addDebitos from "../../controllers/debitos.controllers/addDebitos.js";
import updateDebito from "../../controllers/debitos.controllers/updateDebitos.js";
import deleteDebitos from "../../controllers/debitos.controllers/deleteDebitos.js";

const debitosRouter = async (app) => {
 app.get('/debitos', getDebitos);
 app.post('/debitos/:id', addDebitos);
 app.put('/debitos/:id/:id_deb', updateDebito);
 app.delete('/debitos/:id/:id_deb', deleteDebitos);
}

export default debitosRouter;