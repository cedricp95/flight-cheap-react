import CameraIcon from "@mui/icons-material/PhotoCamera";
import Image from "next/image";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Unstable_Grid2";

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
} from "@mui/material";

import Footer from "./../../components/Footer";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const cards = [1, 2, 3];

const theme = createTheme();

const AboutUs = () => {
  const FlightCheapLogoOnlyTransparent = "/FlightCheapLogoOnlyTransparent.png";
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              About Us
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
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
                compromising on the quality of service and convenience, making
                air travel accessible and budget-friendly for everyone.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action</Button>
              </Stack>
            </Container>
          </Box>
          {/* End hero unit */}

          {/* Avatar */}
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="md">
              <Grid container spacing={2}>
                {[
                  "Starsky",
                  "Cedric",
                  "Cary",
                  "Francely",
                  "Paul",
                  "Romart",
                ].map((name, index) => (
                  <Grid
                    key={name}
                    xs={12}
                    sm={6}
                    md={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight={180}
                  >
                    <Avatar
                      src={`/about-us/avatar${index + 1}.jpg`}
                      sx={{ width: 125, height: 125 }}
                    />

                    <Typography sx={{ ml: 1.5 }}>{name}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
          {/* End of Avatar */}

          {/* Cards */}
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
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
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
          {/* Cards */}

          {/* Footer */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              src={FlightCheapLogoOnlyTransparent}
              alt="Cheap Flight Logo"
              width={50}
              height={50}
            />
          </Box>

          <Box
            sx={{ bgcolor: "background.paper", p: 1 }}
            component="footer"
            alignContent="flex-start"
            alignItems="flex-start"
            justify="flex-start"
          >
            <Typography variant="h6" align="center" gutterBottom>
              FlightCheap
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
              component="p"
            >
              Cheapest Flight Fare Finder
            </Typography>
            <Copyright />
          </Box>
          {/* End Footer */}
        </main>
      </ThemeProvider>
    </>
  );
};

export default AboutUs;
