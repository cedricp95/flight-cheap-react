import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
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
  console.log(props,":props")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>

      <main >{props.children}</main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Layout;
