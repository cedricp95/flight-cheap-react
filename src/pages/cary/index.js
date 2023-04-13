import MeetupList from "../../components/meetups/MeetupList";
import { Button } from "@mui/material";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS} />
      <Button variant="contained" size="large">
        Sample UI Button
      </Button>
    </>
  );
}

export default HomePage;
