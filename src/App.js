import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import SearchAppBar from "./components/Appbar";
import TourCard from "./components/TourCard";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
