import { arrayOfObjects } from "../../../data/comments";
import * as uuid from "uuid";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(arrayOfObjects);
  } else if (req.method === "POST") {
    // req.body.comment = pages/flights_cheap/index.js => body: JSON.stringify({ comment }),
    const comment = req.body.comment;
    const newComment = {
      id: uuid.v4(),
      firstName: comment,
    };
    // arrayOfObjects.push => data/arrayOfObjects.js
    arrayOfObjects.push(newComment);
    res.status(201).json({ message: "Comment added!", comment: newComment });
  }
}
