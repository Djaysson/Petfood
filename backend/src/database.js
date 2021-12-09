const mongoose = require("mongoose");
const URL = "mongodb://localhost/petfood";

mongoose
  .connect(URL)
  .then(() => console.log("DB is up"))
  .catch((err) => console.log(err));
