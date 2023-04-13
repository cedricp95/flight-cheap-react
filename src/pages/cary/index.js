import MeetupList from "../../components/meetups/MeetupList";
import { Button, Typography, Grid, Box, Avatar } from "@mui/material";
import Image from "next/image";

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
      <div className="center">
        <MeetupList meetups={DUMMY_MEETUPS} />
        <Typography variant="h1">
          This is a sample text with typography
        </Typography>
        <Button variant="contained" size="large">
          Sample UI Button
        </Button>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            "--Grid-borderWidth": "1px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
            },
          }}
        >
          {["Jimmy", "Michal", "Jun", "Marija"].map((name, index) => (
            <Grid
              key={name}
              xs={12}
              sm={6}
              md={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight={180}
            >
              <Avatar src={`/about-us/avatar${index + 1}.jpg`} size="lg" />
              <Typography sx={{ ml: 1.5 }}>{name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default HomePage;
