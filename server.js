import express from "express";
import mongoose from "mongoose";
import doctorSchema from "./doctorSchema.js";
import Cors from "cors";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:qM3gv3Bd2QN6A3JP@cluster0.73nqb.mongodb.net/<dbname>?retryWrites=true&w=majority";
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
  resp.status(200).send(`listening on port: ${port}healthcare backend`);
});

// app.post("/youtube", (req, resp) => {
//   const dbCard = req.body;
//   channelSchema.create(dbCard, (err, data) => {
//     if (err) resp.status(500).send(err);
//     else resp.status(201).send(data);
//   });
// });

// app.get("/youtube", (req, resp) => {
//   channelSchema.find((err, data) => {
//     if (err) resp.status(500).send(err);
//     else resp.status(200).send(data);
//   });
// });

// app.delete("/youtube/:name", (req, res) => {
//   channelSchema.findOneAndDelete({ name: req.params.name }, (err) => {
//     res.send(`deleting : ${req.params.name}`);
//     if (err) {
//       return res.status(500).send(err);
//     }
//   });
// });

// Listener
app.listen(port, () => console.log(`Healthcare backend: ${port}`));