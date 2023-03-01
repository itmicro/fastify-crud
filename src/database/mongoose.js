const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  })
  .then((r) => console.log("Database is on"))
  .catch((e) => console.log("Database connection error!"));
