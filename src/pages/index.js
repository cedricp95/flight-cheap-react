import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import BannerSection from "../components/BannerSection";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
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

  const [dataFlightSearch, setDataFlightSearch] = useState([]);

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
          {/* <BannerSection banner={BannerSectionDetails} /> */}
          <SearchForm setDataFlightSearch={setDataFlightSearch} />
          <SearchResults dataFlightSearch={dataFlightSearch} />
          <div style={{ width: "100%", height: "100px" }}></div>
        </Box>
      </Layout>
    </>
  );
}
