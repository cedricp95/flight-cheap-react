import Layout from "../../components/layout/Layout";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import {
  Avatar,
  Link,
  Container,
  Typography,
  Toolbar,
  Box,
  Stack,
  CssBaseline,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Button,
  AppBar,
  createTheme,
  ThemeProvider,
  Paper,
  CardHeader,
  Divider,
} from "@mui/material";

import { styled } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        FlightCheap
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3];
const devTeam = [
  {
    id: 1,
    name: "Starsky",
    role: "Team Leader",
    picture: "avatar1.jpg",
  },
  {
    id: 2,
    name: "Cedric",
    role: "Frontend Lead",
    picture: "avatar2.jpg",
  },
  {
    id: 3,
    name: "Cary",
    role: "Assistant Team Leader/Frontend",
    picture: "avatar3.jpg",
  },
  {
    id: 4,
    name: "John Paul",
    role: "Full Stack Developer",
    picture: "avatar3.jpg",
  },
  {
    id: 5,
    name: "Francely",
    role: "Assistant Team Leader/Backend",
    picture: "avatar3.jpg",
  },
  {
    id: 6,
    name: "Romart",
    role: "Frontend Developer",
    picture: "avatar3.jpg",
  },
];

const AboutUs = () => {
  const FlightCheapLogoOnlyTransparent = "/FlightCheapLogoOnlyTransparent.png";
  return (
    <Layout>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Our Goal
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            To provide affordable flight fares to our customers without
            compromising on the quality of service and convenience, making air
            travel accessible and budget-friendly for everyone.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          ></Stack>
        </Container>
      </Box>
      {/* End hero unit */}

      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Meet the Team
      </Typography>

      {/* Avatar */}

      <Grid
        sx={{
          textAlign: "center !important",
          justifyContent: "center !important",
          alignItems: "center !important",
        }}
        container
        spacing={2}
        pl={8}
        pr={8}
      >
        {devTeam.map((persons, index) => (
          <Grid item xs={12} sm={4} key={persons.id}>
            <Card>
              <CardContent>
                <Avatar
                  src={`/about-us/avatar${index + 1}.jpg`}
                  sx={{
                    margin: "auto",
                    width: 125,
                    height: 125,
                  }}
                />
                <CardHeader title={persons.name} subheader={persons.role} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* End of Avatar */}

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading 1
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default AboutUs;
