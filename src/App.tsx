import "./App.css";
import { BackgroundImage } from "./components/BackgroundImage/BackgroundImage";
import backgrounImage from "./assets/images/background.png";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <BackgroundImage image={backgrounImage}>
        <Container sx={{ my: 5 }}>
          <h1>Test</h1>
        </Container>
      </BackgroundImage>
    </>
  );
}

export default App;
