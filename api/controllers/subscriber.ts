import { NextApiRequest, NextApiResponse } from "next";

export async function addSubscriber(
  req: NextApiRequest,
  res: NextApiResponse<{ message?: string; result: number }>
) {
  const mailchimpInstance = process.env.REACT_APP_mailchimpInstance;
  const listUniqueId = process.env.REACT_APP_listUniqueId;
  const mailchimpApiKey = process.env.REACT_APP_mailchimpApiKey;
  var request = require("superagent");
  try {
    console.log(
      "Save Subscribers request " + JSON.stringify(req.body.subscriber)
    );
    request
      .post(
        "https://" +
          mailchimpInstance +
          ".api.mailchimp.com/3.0/lists/" +
          listUniqueId +
          "/members/"
      )
      .set("Content-Type", "application/json;charset=utf-8")
      .set(
        "Authorization",
        "Basic " + new Buffer("any:" + mailchimpApiKey).toString("base64")
      )
      .send({
        email_address: req.body.subscriber.email,
        status: "subscribed",
        // 'merge_fields': {
        //     'FNAME': req.body.firstName,
        //     'LNAME': req.body.lastName
        // }
      })
      .end(function (err, response) {
        if (
          response.status === 400 &&
          response.body.title === "Member Exists"
        ) {
          console.log("Error subscribing: " + JSON.stringify(response.body));
          res
            .status(400)
            .json({ message: "Email already exists!", result: -1 });
        } else if (response.status < 300) {
          res.status(200).json({ result: 1 });
        } else {
          console.log("Error subscribing: " + JSON.stringify(response.body));
          res
            .status(400)
            .json({ message: "Ops.. Something went wrong!", result: -1 });
        }
      });

    // const count = await Subscribers.countDocuments({email: req.body.subscriber.email});
    // if(count === 1) {
    //     res.status(500).json({ message: "Email already exists!", result: -1 });
    // } else {
    //     subscriber = new Subscribers(req.body.subscriber);
    //     await subscriber.save();
    //     res.status(200).json({result : 1});
    // }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Ops.. Something went wrong!", result: -1 });
  }
}
