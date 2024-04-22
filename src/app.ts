import "express-async-errors";
import express from "express";
const app = express();
const port = process.env.PORT || 8080 || 8081; // default port to listen
import routers from "./routers/index";
import dotenv from "dotenv";
dotenv.config();
import "./db/dbConnection";
import errorHandlerMiddleware from "./middlewares/errorhandler";
import cors from "cors";
import { connect } from "./db/postgreSqlConnection";
connect();
// Middleware
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Router
app.use("/api", routers);

// Error Handler
app.use(errorHandlerMiddleware);

// start the Express server
app.listen(port, () => {
  console.log(`Server Started`);
});

export default app;
