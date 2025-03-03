import db from "../../../db.js";
import bcrypt from "bcrypt"; // Importando o bcrypt

const addUsers = async (req, reply) => {
  // Validação dos campos
  const { nome, sexo, dataNasc, email, senha } = req.body;

  if (!nome || !sexo || !dataNasc || !email || !senha) {
    return reply.status(400).send("Todos os campos são obrigatórios.");
  }

  // Hash da senha
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(senha, saltRounds);

  // SQL para inserir os dados
  const sql = `
    INSERT INTO usuarios 
    (nome, sexo, dataNasc, email, senha) 
    VALUES ($1, $2, $3, $4, $5)
  `;

  const values = [
    nome,
    sexo,
    dataNasc,
    email,
    hashedPassword // Usando a senha hasheada
  ];

  try {
    // Executando a query com os valores fornecidos
    await db.query(sql, values);
    reply.status(200).send("Usuário cadastrado com sucesso!");
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    reply.status(500).send("Erro ao cadastrar usuário: " + error.message);
  }
};

export default addUsers;
