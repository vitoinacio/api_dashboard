import db from "../../../db.js";

const getUsers = async (req, reply) => {
  const { email } = req.query; 

  let sql = 'SELECT * FROM usuarios'; 
  let params = []; 

  if (email) {
    sql += ' WHERE email = $1'; 
    params = [email];
  }

  try {
    const { rows } = await db.query(sql, params);  
    reply.status(200).send(rows); 
  } catch (error) {
    console.error('Erro ao executar a query:', error);
    reply.status(500).send("Erro ao obter usuários: " + error.message);
  }
};

export default getUsers;