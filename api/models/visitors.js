import mongoose from "mongoose";
const Schema = mongoose.Schema;
mongoose.set("useFindAndModify", false);

const schema = new Schema({
  id: { type: String, required: true, unique: true },
  visitors: { type: Number, default: 1 },
});

const Visitors = mongoose.models.Visitors || mongoose.model("Visitors", schema);

export { Visitors };
