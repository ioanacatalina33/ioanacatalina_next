import mongoose from "mongoose";
//const Schema = mongoose.Schema;

mongoose.set("useFindAndModify", false);

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  coord_lat: { type: String, required: true },
  coord_long: { type: String, required: true },
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }],
});

//const MapPoint = mongoose.model("Location", schema);
//module.exports = mongoose.model("Location", schema);

//export default MapPoint;

const Location = mongoose.models.Location || mongoose.model("Location", schema);

export { Location };
