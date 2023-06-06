import "./App.css";
import { useState, useEffect } from "react";
import { BackgroundImage } from "./components/BackgroundImage/BackgroundImage";
import backgrounImage from "./assets/images/background.png";
import { Container, Grid } from "@mui/material";
import { Filters } from "./components/Filters/Filters";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import CurrencyPoundRoundedIcon from "@mui/icons-material/CurrencyPoundRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import { RadioButtonProps } from "./components/RadioButton/RadioButton";
import { hotelsInformation as mockHotelInformation } from "./mock-data";
import { Dashboard } from "./components/Dashboard/Dashboard";
import type { Hotel } from "./types/interfaces/hotel";

function App() {
  const [selectedFilter, setSelectedFilter] =
    useState<string>("alphabetically");
  const [hotelsInformation, setHotelsInformation] =
    useState<Hotel[]>(mockHotelInformation);

  const filtersList: RadioButtonProps[] = [
    {
      label: (
        <span>
          sort <b>alphabetically</b>
        </span>
      ),
      id: "alphabetically",
      name: "filters",
      icon: <SortByAlphaIcon />,
      defaultChecked: selectedFilter === "alphabetically",
    },
    {
      label: (
        <span>
          sort by <b>price</b>
        </span>
      ),
      id: "price",
      name: "filters",
      icon: <CurrencyPoundRoundedIcon />,
      defaultChecked: selectedFilter === "price",
    },
    {
      label: (
        <span>
          sort by <b>star rating</b>
        </span>
      ),
      id: "rating",
      name: "filters",
      icon: <GradeRoundedIcon />,
      defaultChecked: selectedFilter === "rating",
    },
  ];

  useEffect(() => {
    const sortedHotelsInformation = [...hotelsInformation];
    if (selectedFilter === "alphabetically") {
      sortedHotelsInformation.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedFilter === "price") {
      sortedHotelsInformation.sort((a, b) => a.price - b.price);
    } else if (selectedFilter === "rating") {
      sortedHotelsInformation.sort((a, b) => b.rating - a.rating);
    }

    setHotelsInformation(sortedHotelsInformation);
  }, [selectedFilter]);

  return (
    <>
      <BackgroundImage image={backgrounImage}>
        <Container sx={{ my: 5 }}>
          <Grid container spacing={15}>
            <Grid item xs={12} md={4}>
              <Filters
                radioButtons={filtersList}
                handleChange={(e) => setSelectedFilter(e.target.id)}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Dashboard hotelsInformation={hotelsInformation} />
            </Grid>
          </Grid>
        </Container>
      </BackgroundImage>
    </>
  );
}

export default App;
