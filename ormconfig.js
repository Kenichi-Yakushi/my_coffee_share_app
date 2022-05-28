module.exports = [
  {
    name: "default", // 標準で読み込まれる設定
    type: "mysql",
    host: "ssr-sample-db",
    port: 3306,
    username: "nodeexpressor",
    password: "secret",
    database: "my_coffee_share_app_db",
    synchronize: false,
    logging: false,
    connectTimeout: 30 * 1000,
    acquireTimeout: 30 * 1000,
    entities: [__dirname + "/views/entity/**/*.js"],
    migrations: [__dirname + "/views/migration/**/*.js"],
    // 今回subscriberは扱いません。
    // subscribers: [__dirname + '/dist/subscriber/**/*.js'],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      // subscribersDir: 'src/subscriber'
    },
  },
];
