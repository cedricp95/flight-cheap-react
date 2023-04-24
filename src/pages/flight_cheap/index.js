import { useState } from "react";

function CommentsPage() {
  const [arrayOfObjects, setArrayOfObjects] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("./api/comments");
    const data = await response.json();
    setArrayOfObjects(data);
  };

  const submitComment = async () => {
    const response = await fetch("./api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setArrayOfObjects([data, ...arrayOfObjects]);
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      <ul>
        {arrayOfObjects.map((flightInfo) => {
          return (
            // Linked to the data/comments.js
            <>
              <li key={flightInfo.id}>
                ID:{flightInfo.id} - {flightInfo.firstName}
                <button onClick={() => console.log(flightInfo.id)}>
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default CommentsPage;
