module.exports = {
  type: 'postgres',
  host: process.env.MAGISHIFT_DB_HOST,
  port: process.env.MAGISHIFT_DB_PORT,
  username: process.env.MAGISHIFT_DB_USER,
  password: process.env.MAGISHIFT_DB_PASSWORD,
  database: process.env.MAGISHIFT_DB_NAME,
};
