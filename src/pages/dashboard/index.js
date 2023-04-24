import {
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Select,
} from "@mui/material";
import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import comments from "../../data/comments";
import { useState } from "react";

import BannerSection from "../../components/BannerSection";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Box from "@mui/material/Box";

export default function Dashboard() {
  const BannerSectionDetails = {
    title: "Book cheap flights now!",
    description:
      "Welcome to our website! We are dedicated to finding the cheapest flight deals possible, partnering with major airlines and travel companies to bring you exclusive offers. Let us help you find the perfect flight deal for your next adventure!",
    image: "/banner.jpg",
    imageText: "plane img",
    linkText: "Book now",
  };

  const [arrayOfObjects, setArrayOfObjects] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("./api/comments");
    const data = await response.json();
    setArrayOfObjects(data);
  };

  const [selectedComment, setSelectedComment] = useState(null);

  const handleDeleteComment = () => {
    if (selectedComment) {
      console.log(selectedComment.id);
    }
  };

  const handleSelectChange = (event) => {
    const commentId = event.target.value;
    const comment = arrayOfObjects.find((c) => c.id === commentId);
    setSelectedComment(comment);
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
      <Layout type="auth">
        <Box
          sx={{
            position: "relative",
            backgroundColor: "grey.800",
            color: "#fff",
            mb: 4,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(/banner2.jpg)`,
          }}
        >
          <BannerSection banner={BannerSectionDetails} />
          <SearchForm />
          <SearchResults />
          <div style={{ width: "100%", height: "100px" }}></div>
        </Box>

        <Grid container justify="center" alignItems="center">
          <Grid item>
            {/* Your content goes here */}
            <Typography variant="h1">Dashboard</Typography>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={submitComment}>Submit Comment</button>
            <button onClick={fetchComments}>Load Comments</button>
            <ul>
              {arrayOfObjects.map((comment) => {
                return (
                  // Linked to the data/comments.js
                  <>
                    <li key={comment.id}>
                      ID:{comment.id} - {comment.name}
                      <button onClick={() => console.log(comment.id)}>
                        Delete
                      </button>
                    </li>
                  </>
                );
              })}
            </ul>

            <Select
              value={selectedComment ? selectedComment.id : ""}
              onChange={handleSelectChange}
            >
              <MenuItem value="">Select comment</MenuItem>
              {arrayOfObjects.map((comment) => (
                <MenuItem key={comment.id} value={comment.id}>
                  ID: {comment.id} - {comment.name}
                </MenuItem>
              ))}
            </Select>
            <Button onClick={handleDeleteComment} disabled={!selectedComment}>
              Delete
            </Button>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
