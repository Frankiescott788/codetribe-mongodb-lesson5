import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes";

const app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/recipes");
const db = mongoose.connection;

db.on("error", () => console.log("Failed to connect to mongodb"));
db.once("open", (): void => {
  app.listen(8080, () => {
    console.log("server up, running and connected to Database");
    app.use(routes)
  });

});
