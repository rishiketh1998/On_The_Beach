import "./App.css";
import { useState } from "react";
import { BackgroundImage } from "./components/BackgroundImage/BackgroundImage";
import backgrounImage from "./assets/images/background.png";
import { Container, Grid } from "@mui/material";
import { Filters } from "./components/Filters/Filters";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import CurrencyPoundRoundedIcon from "@mui/icons-material/CurrencyPoundRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import { RadioButtonProps } from "./components/RadioButton/RadioButton";

function App() {
  const [selectedFilter, setSelectedFilter] =
    useState<string>("alphabetically");
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
      defaultChecked: true,
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
    },
  ];
  console.log(selectedFilter);
  return (
    <>
      <BackgroundImage image={backgrounImage}>
        <Container sx={{ my: 10 }}>
          <Grid container spacing={15}>
            <Grid item xs={12} md={4}>
              <Filters
                radioButtons={filtersList}
                handleChange={(e) => setSelectedFilter(e.target.id)}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <div>Content</div>
            </Grid>
          </Grid>
        </Container>
      </BackgroundImage>
    </>
  );
}

export default App;
