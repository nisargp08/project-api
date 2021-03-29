import express from "express";
import morgan from 'morgan'
import { json,urlencoded } from "body-parser";

// Config imports
import { connect } from "./utils/db";

// Route imports
import componentLibraryRouter from './resources/component_list/component_list.router'

export const app = express();

// To disable 'x-powered-by' property in our response
app.disable('x-powered-by')

// Middlewares
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.get("/", (req, res) => {
  console.log("Landing route");
  // res.header("Content-Type",'application/json');
  // res.send(JSON.stringify(componentLibraryRouter.stack, null, 4));
  res.send("Welcome to landing page");
});
app.get("/api", (req, res) => {
  console.log("API route");
  res.send("Welcome to API route pages");
});
app.use('/api/component_library',componentLibraryRouter);

export const startServer = async () => {
    try {
      await connect();
      const port = process.env.PORT || 5555;
      app.listen(port, () => {
        console.log(
          `Server is live and listening on ${process.env.HOST}:${port}`
        );
      });
    } catch (error) {
      console.log(e);
    }
  };
