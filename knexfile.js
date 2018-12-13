const localPgConnection = {
  host: 'localhost', // address to find the db server
  database: 'lambda',
  user: 'luis',
  password: 'pass',
};
// where is DATABASE_URL coming from?
const dbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/lambda.sqlite3',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
    useNullAsDefault: true, // not needed for production only for sqlite
  },
  production: {
    client: 'pg',
    connection: dbConnection, // can be and object or a string
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
};
