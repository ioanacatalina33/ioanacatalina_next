import { Parameter } from "../models";

export async function getParameter(req, res) {
  Parameter.find()
    .where("name")
    .equals(req.body.name)
    .then((parameter) => {
      res.status(200).json(parameter);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
}
