/* eslint-disable no-undef */
exports.connect = (mongoose) => {
  const db = mongoose.connection;

  db.on("connecting", function () {
    console.log("connecting to MongoDB...");
  });

  db.on("error", function (error) {
    console.error("Error in MongoDb connection: " + error);
    mongoose.disconnect();
  });
  db.on("connected", function () {
    console.log("MongoDB connected!");
  });
  db.once("open", function () {
    console.log("MongoDB connection opened!");
  });
  db.on("reconnected", function () {
    console.log("MongoDB reconnected!");
  });
  db.on("disconnected", function () {
    console.log("MongoDB disconnected!");
    mongoose
      .connect(process.env.MONGODB_URI, {
        auto_reconnect: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .catch((error) => {
        console.log(
          "Not possible to connect to the database! " + JSON.stringify(error)
        );
      });
  });
  mongoose
    .connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      auto_reconnect: true,
      useNewUrlParser: true,
    })
    .catch((error) => {
      console.log(
        "Not possible to connect to the database! " + JSON.stringify(error)
      );
    });
};

sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
