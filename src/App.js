import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import SearchAppBar from "./components/Appbar";
import TourCard from "./components/TourCard";
import cities from './data.json';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={5}>
          {cities.map((city, index) => (
            <div key={`${city.name}_${index}`}>
              <Typography 
                variant="h4" 
                component="h2" 
                marginTop={5} 
                marginBottom={3}
              >
                Top {city.name} Tours
              </Typography>
                <Grid container spacing={5}>
                  {city.tours.map((tour, index) => (
                    <TourCard tour={tour} key={`${tour.name}_${index}`}/>
                  ))}
                </Grid>
            </div>
          ))}
          {/* <TourCard />
          <TourCard />
          <TourCard />
          <TourCard /> */}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
