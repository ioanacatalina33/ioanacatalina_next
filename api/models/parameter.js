import mongoose from "mongoose";
const Schema = mongoose.Schema;

mongoose.set("useFindAndModify", false);

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  value: { type: String, required: false, unique: false },
});

const Parameter =
  mongoose.models.Parameter || mongoose.model("Parameter", schema);

export { Parameter };
