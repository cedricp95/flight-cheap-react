import CameraIcon from "@mui/icons-material/PhotoCamera";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Link,
  Container,
  Typography,
  Toolbar,
  Box,
  Stack,
  Grid,
  CssBaseline,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Button,
  AppBar,
} from "@mui/material";
import Image from "next/image";
import { LocalAirport } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
function Layout(props) {
  const FlightCheapLogoOnlyTransparent = "/FlightCheapLogoOnlyTransparent.png";
  console.log(props, ":props");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalAirport sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            FlightCheap
          </Typography>
        </Toolbar>
      </AppBar>

      <main>{props.children}</main>
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
    </ThemeProvider>
  );
}

export default Layout;
