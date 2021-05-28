import { Visitors } from "../models";
import { getImagesNamesFromFolder } from "../utils";

export async function getProductList(req, res) {
  try {
    var collection = req.body.collection;
    var pictures = await getImagesNamesFromFolder(
      "canvaspop/" + (collection == "new" ? "all" : collection)
    );

    let finalList = pictures.reverse();
    let prints = [];

    for (let i = 0; i < finalList.length; i++) {
      let visitors = await Visitors.findOne({
        id: finalList[i].slice(0, finalList[i].indexOf("-")),
      });
      prints.push({
        picture: finalList[i],
        visits: visitors === null ? 0 : visitors.visitors,
      });
    }

    res.status(200).json({
      prints: prints,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
    return;
  }
}

export async function getProduct(req, res) {
  try {
    var productId = req.body.productId;
    var pictures = await getImagesNamesFromFolder("canvaspop/_fullimages");

    //increment visitors and fetch number
    let visitors = await Visitors.findOne({
      id: productId,
    });
    if (visitors !== null) {
      visitors = await Visitors.findOneAndUpdate(
        { id: productId },
        {
          $set: {
            visitors: visitors.visitors + 1,
          },
        },
        { new: true }
      );
    } else {
      visitors = new Visitors({ id: productId, visitors: 1 });
      visitors.save();
    }

    res.status(200).json({
      visits: visitors.visitors,
      pictures: pictures.filter((picture) => picture.includes(productId)),
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
    return;
  }
}
