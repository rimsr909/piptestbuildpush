const express = require("express"); // express est capable de faire et de recevoir des requete 
const app = express();

app.use(express.json());

app.get('/testNode', (_req, res) => { // hay endpoint get samayta /testNode
  res.status(200).send("yes le testNode endpoint fonctionne avec app");
});

module.exports = app;

/*

app.post("/api/add", (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "Invalid input" });
  }
  res.json({ result: a + b });
});

*/

//module.exports = app;