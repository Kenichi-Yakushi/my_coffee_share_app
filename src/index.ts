import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { User } from "./entity/User";
import ssr from "./ssr";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();

    // const mysql = require("mysql2");
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // setup express app here
    // const connection = mysql.createConnection({
    //   host: "localhost",
    //   user: "nodeexpressor",
    //   password: "secret",
    //   database: "my_coffee_share_app_db",
    // });

    // connection.connect((err) => {
    //   if (err) {
    //     console.log("error connecting: " + err.stack);
    //     return;
    //   }
    //   console.log("success");
    // });

    // app.get("/", (req, res) => {
    //   connection.query("SELECT * FROM users", (error, results) => {
    //     console.log(results);
    //     res.render("../CountUp");
    //   });
    // });

    // app.get("/", (_, res) => {
    //   const response = ssr();
    //   res.send(response);
    // });

    //add on 27th May by Kenichi_Yakushi start
    // app.use(express.static("assets"));

    // // https://localhost:3000 にアクセスがあったら ssr() を返す
    // app.get('/', (_, res) => {
    //   res.send(ssr());
    // });

    // app.get("/", (_, res) => {
    //   const response = ssr();
    //   res.send(response);
    // });
    //add on 27th May by Kenichi_Yakushi end

    // start express server
    app.listen(3000);

    // insert new users for test
    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        firstName: "Timber",
        lastName: "Saw",
        age: 27,
      })
    );

    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        firstName: "Phantom",
        lastName: "Assassin",
        age: 24,
      })
    );

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );

    app.use(express.static("assets"));

    app.get("/", (_, res) => {
      const response = ssr();
      res.send(response);
    });
  })
  .catch((error) => console.log(error));
