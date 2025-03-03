import db from "../../../db.js"; // Conexão com o banco de dados
import bcrypt from "bcrypt"; // Para comparar senhas

const loginUser = async (req, reply) => {
  const { email, senha } = req.body;

  try {
    // Buscando o usuário pelo email
    const result = await db.query("SELECT * FROM usuarios WHERE email = $1", [email]);
    const user = result.rows[0]; // Obtém o primeiro usuário encontrado

    if (!user) {
      return reply.status(400).send("Usuário não encontrado.");
    }

    // Comparando a senha fornecida com a senha armazenada no banco (hash)
    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    
    if (!isPasswordValid) {
      return reply.status(400).send("Senha incorreta.");
    }

    // Login bem-sucedido, não gerando o token
    reply.status(200).send({ message: "Login bem-sucedido" });
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    reply.status(500).send("Erro ao realizar login: " + error.message);
  }
};

export default loginUser;
