const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () =>
  console.log(`Database Connected at ${process.env.DB_URL}`)
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
