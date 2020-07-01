module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    ssl: true,
    use_env_variable: 'postgres://vibnnijo:S_ELoBzS4CTpeMC9sEW6Y3BzlI6EVsWV@ruby.db.elephantsql.com:5432/vibnnijo',
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
};