import express from "express";
import mongoose from "mongoose";
import doctorSchema from "./doctorSchema.js";
import Cors from "cors";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:qM3gv3Bd2QN6A3JP@cluster0.73nqb.mongodb.net/healthcaredb?retryWrites=true&w=majority";
// const methodOverride = require('method-override');

// Middlewares
app.use(express.json());
app.use(Cors());

//  DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//  API endpoints
app.get("/", (req, resp) => {
  resp.status(200).send(`listening on port: ${port} healthcare backend`);
});


app.get("/doctors", (req, resp) => {
    resp.status(200).send([10,11,12]);
});


// Listener
app.listen(port, () => console.log(`Healthcare backend: ${port}`));