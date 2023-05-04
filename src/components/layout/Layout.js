import { useState, useEffect } from "react";
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
import { LocalAirport, Lock } from "@mui/icons-material";

const exclude_pathname = ["access/logout", "access/login", "about_us"];

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

  const [isLogin, setLogin] = useState(true);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLogin(true);
    }
  }, [setLogin]); // Add setLogin as a dependency

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <LocalAirport />
          <Link
            variant="button"
            color="inherit"
            href="/"
            sx={{ my: 1, mx: 1.5, textDecoration: "none", flexGrow: 1 }}
          >
            <Typography variant="h6" color="inherit" noWrap>
              FlightCheap
            </Typography>
          </Link>
          <nav>
            {isLogin ? (
              <>
                <Link
                  variant="button"
                  color="inherit"
                  href="/#"
                  sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  variant="button"
                  color="inherit"
                  href="/access/login"
                  sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
                >
                  Login
                </Link>
              </>
            )}
            <Link
              variant="button"
              color="inherit"
              href="/contact-us"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              Contact Us
            </Link>
            <Link
              variant="button"
              color="inherit"
              href="/about_us"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              About Us
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {isLogin ? (
        <>
          <main>{props.children}</main>
        </>
      ) : (
        <>
          <Link color="inherit" href="/access/login">
            Sign in
          </Link>
        </>
      )}

      {/* Footer */}
      <Box
        display="flex"
        sx={{ bgcolor: "#c5e1ec" }}
        justifyContent="center"
        alignItems="center"
        pt={4}
      >
        <Image
          src={FlightCheapLogoOnlyTransparent}
          alt="Cheap Flight Logo"
          width={50}
          height={50}
        />
      </Box>

      <Box
        sx={{ bgcolor: "#c5e1ec" }}
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
