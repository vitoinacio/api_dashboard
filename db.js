import pkg from 'pg'; // Importa o pacote inteiro
import dotenv from 'dotenv';

// Cria a variável Pool a partir do pacote pg
const { Pool } = pkg;

// Configura as variáveis de ambiente
dotenv.config();

// Define a URL da database PostgreSQL a partir da variável de ambiente
const dbUrl = process.env.DATABASE_URL;

// Cria uma variável para usar a conexão com o banco
let pool;

// Função para conectar ao banco de dados e reconectar, caso haja erro ou desconexão
const handleConnect = async () => {
  try {
    pool = new Pool({
      connectionString: dbUrl,
      ssl: {
        rejectUnauthorized: false, // Se necessário, desative a verificação SSL para conexões com SSL (ajuste conforme seu ambiente)
      },
    });
    console.log("Conectado à Data Base!");
  } catch (error) {
    console.error("Erro ao conectar à Data Base: ", error);
    setTimeout(handleConnect, 2000); // Reconecta ao banco após 2 segundos
  }
};

// Chama a função para conectar à database e aguarda a conexão antes de exportar
await handleConnect();

export default pool; // Exporta o pool de conexões para ser usado em outras partes do código