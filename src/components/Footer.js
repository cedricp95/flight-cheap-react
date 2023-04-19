import { Box, Image, Typography, Copyright } from "@mui/material";

function Footer() {
  const FlightCheapLogoOnlyTransparent = "/FlightCheapLogoOnlyTransparent.png";

  return (
    <>
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
    </>
  );
}

export default Footer;
