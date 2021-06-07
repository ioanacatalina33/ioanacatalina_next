import dbConnect from "../config/dbConnect";
import { Location, Article } from "../models";

export async function fetchValidLocations(): Promise<Location> {
  let locations = [];
  try {
    await dbConnect();
    locations = await Location.find().populate(
      "articles",
      {
        name: 1,
        name_url: 1,
        name_location: 1,
        date_start: 1,
        date_end: 1,
        country: 1,
        continent: 1,
        type: 1,
        subtype: 1,
        identifier: 1,
      },
      Article
    );
  } catch (err) {
    console.error("error at fetchValidLocations " + err.message);
  }
  return JSON.parse(JSON.stringify(locations));
}

export async function getNumberLocations() {
  let number = 0;
  try {
    await dbConnect();

    number = await Location.count();
  } catch (err) {
    console.error("error at getNumberLocations: " + err.message);
  }
  return number;
}

export async function getLocations(req, res) {
  Location.find()
    .sort("name")
    .then((locations) => {
      res.status(200).json(locations);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
}

export async function getValidLocations(req, res) {
  Location.find()
    .populate(
      "articles",
      {
        _id: 1,
        name: 1,
        name_url: 1,
        name_location: 1,
        date_start: 1,
        date_end: 1,
        country: 1,
        continent: 1,
        type: 1,
        subtype: 1,
        identifier: 1,
        metadata: 1,
      },
      Article
    )
    .where({ coord_long: { $ne: "1" }, coord_lat: { $ne: "1" } })
    .then((locations) => {
      res.status(200).json(locations);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
}
