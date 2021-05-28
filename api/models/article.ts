import mongoose from "mongoose";

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const schema = new mongoose.Schema(
  {
    name: String,
    name_url: { type: String, required: true, unique: true },
    name_location: { type: String, default: "" },
    description: String,
    locations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }],
    country: { type: String, required: true },
    continent: { type: String, required: true },
    date_start: { type: Date, required: true },
    date_end: Date,
    type: { type: String, required: true },
    subtype: String,
    keywords: String,
    metadata: String,
    url: String,
    identifier: { type: String, required: true },
  },
  { timestamps: true }
);

//const Article = mongoose.model("Article", schema);

//module.exports = mongoose.model("Article", schema);

//export default Article;
const Article = mongoose.models.Article || mongoose.model("Article", schema);

export { Article };
