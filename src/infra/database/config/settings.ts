import settings from "../../config/settings";

const database = {
  client: settings.DATABASE_DRIVER,
  migrations: {
    directory: "src/database/migrations",
  },
  seeds: {
    directory: "src/database/seeds",
  },
  debug: settings.NODE_ENV === "dev",
};

const drivers = {
  sqlite3: {
    connection: {
      filename: settings.DATABASE_FILE_NAME,
    },
    useNullAsDefault: true,
  },
  pg: {
    connection: {
      charset: "utf8",
      host: settings.DATABASE_HOST,
      port: settings.DATABASE_PORT,
      database: settings.DATABASE_NAME,
      user: settings.DATABASE_USER,
      password: settings.DATABASE_PASSWORD,
      pool: {
        min: 1,
        max: 1,
      },
    },
  },
};

export default { ...database, ...drivers[settings.DATABASE_DRIVER] };
