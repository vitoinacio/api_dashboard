import db from "../../../db.js";
import bcrypt from "bcrypt"; // Importando o bcrypt

const addUsers = async (req, reply) => {
  // Validação dos campos
  const { nome, sexo, dataNasc, email, senha } = req.body;

  // Verifica se todos os campos estão presentes
  if (!nome || !sexo || !dataNasc || !email || !senha) {
    return reply.status(400).send("Todos os campos são obrigatórios.");
  }

  // Hash da senha
  const saltRounds = 10;
  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(senha, saltRounds);
  } catch (hashError) {
    console.error("Erro ao hashear a senha:", hashError);
    return reply.status(500).send("Erro interno ao processar a senha.");
  }

  // SQL para inserir os dados
  const sql = `
    INSERT INTO usuarios 
    (nome, sexo, dataNasc, email, senha) 
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id;  -- Retorna o ID do usuário recém-criado
  `;

  const values = [nome, sexo, dataNasc, email, hashedPassword];

  try {
    // Verifica se o email já existe
    const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = $1';
    const checkEmailResult = await db.query(checkEmailQuery, [email]);

    if (checkEmailResult.rows.length > 0) {
      return reply.status(400).send("O e-mail fornecido já está registrado.");
    }

    // Executando a query para adicionar o usuário
    const result = await db.query(sql, values);

    // Retorna o ID do usuário criado
    reply.status(201).send({
      message: "Usuário cadastrado com sucesso!",
      userId: result.rows[0].id, // Envia o ID do usuário recém-criado
    });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    // Mensagem mais detalhada em caso de erro
    reply.status(500).send("Erro ao cadastrar usuário: " + error.message);
  }
};

export default addUsers;