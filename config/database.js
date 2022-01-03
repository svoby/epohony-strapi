const path = require('path');
const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {

  if (env('NODE_ENV') === 'production') {
    const config = parse(process.env.DATABASE_URL);
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: false,
        }
      }
    }
  }

  //   return {
  //     defaultConnection: 'default',
  //     connections: {
  //       default: {
  //         connector: 'bookshelf',
  //         settings: {
  //           client: 'postgres',
  //           host: config.host,
  //           port: config.port,
  //           database: config.database,
  //           username: config.user,
  //           password: config.password,
  //         },
  //         options: {
  //           ssl: false,
  //         },
  //       },
  //     },
  //   }
  // }

  if (env('NODE_ENV') === 'development') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'panzer'),
          user: env('DATABASE_USERNAME', 'panzer'),
          password: env('DATABASE_PASSWORD', 'panzer'),
          ssl: env.bool('DATABASE_SSL', false),
        }
      }
    }
  }

  // return {
  //   connection: {
  //     client: 'sqlite',
  //     connection: {
  //       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
  //     },
  //     useNullAsDefault: true,
  //   },
  // }
};