import express from "express";
import morgan from "morgan";
import { thingsiKnow } from "../data/thingsiKnow";

const port = 4005;

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.listen(port, () => {
  console.log("Lintening on port 4005");
});

app.get("/things", (req, res) => {
  res.status(200).json({ thingsiKnow });
});

app.get("/things/:idThing", (req, res) => {
  const thingiKnow = thingsiKnow.filter(
    (thing) => thing.id === req.params.idThing
  );
  res.status(200).json({ thingiKnow });
});
