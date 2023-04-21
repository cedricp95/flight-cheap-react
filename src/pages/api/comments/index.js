import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    // req.body.comment = pages/flights_cheap/index.js => body: JSON.stringify({ comment }),
    const comment = req.body.comment;
    const newComment = {
      id: new Date().toISOString(),
      text: comment,
    };
    // comments.push => data/comments.js
    comments.push(newComment);
    res.status(201).json({ message: "Comment added!", comment: newComment });
  }
}
