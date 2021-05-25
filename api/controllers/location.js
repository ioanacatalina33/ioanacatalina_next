import { Location, Article } from "../models";

export async function getLocations(req, res) {
  Location.find()
    .sort("name")
    .then((locations) => {
      res.status(200).json(locations);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}

export async function getValidLocations(req, res) {
  Location.find()
    .populate("articles", Article)
    .where({ coord_long: { $ne: "1" }, coord_lat: { $ne: "1" } })
    .then((locations) => {
      res.status(200).json(locations);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
}
