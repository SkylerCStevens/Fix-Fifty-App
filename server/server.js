const express = require("express");
const logger = require("morgan");

const app = express();
const port = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// checking the node_env
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // handling the index route
  app.get("/", (req, res) => {
    // serving the complied react application
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
