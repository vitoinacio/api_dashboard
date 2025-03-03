import pkg from 'pg';
const { Pool } = pkg; 
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

// Obtém a URL de conexão do banco de dados
const dbUrl = process.env.DATABASE_URL;

// Verifica se a URL de conexão está definida
if (!dbUrl) {
  console.error("A variável de ambiente DATABASE_URL não está definida!");
  process.exit(1); // Termina o processo se não tiver a URL do banco de dados
}

let pool;

// Função para conectar ao banco de dados e reconectar em caso de falha
const handleConnect = async () => {
  try {
    pool = new Pool({
      connectionString: dbUrl,
      ssl: {
        rejectUnauthorized: false, // Dependendo do ambiente, você pode querer configurar isso
      },
    });
    // Testa a conexão com o banco de dados
    await pool.query('SELECT NOW()');
    console.log("Conectado ao banco de dados!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    setTimeout(handleConnect, 5000); // Tenta reconectar após 5 segundos
  }
};

// Chama a função para conectar ao banco
handleConnect();

// Exporta o pool para ser utilizado em outros módulos
export default pool;