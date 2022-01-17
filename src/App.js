import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import { IconButton, TextField, Toolbar, Typography } from '@mui/material';
import WeatherIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useEffect, useState } from 'react';
import WeatherCard from './Card';
import { makeStyles, ThemeProvider, createTheme } from "@mui/material/styles"
//import {createTheme} from "@mui/material/styles"
import ButtonStyled from "./ButtonStyles"
import { purple, green, black } from "@mui/material/colors"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { InputAdornment } from '@mui/material';
import CardForecast from "./CardForecase"

const theme = createTheme({
  palette: {
    primary: {
      main: "#243b55"
    },
    secondary: {
      main: green[500]
    }
  },

  typography: {
    color: "#141e30",
    h2: {
      marginBottom: 15
    }
  },
  textField: {
    borderRadius: 15
  }

});

function App() {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});
  const [cityName, setCityName] = useState("");
  const [forecastList, setForecastList] = useState([]);
  function handleChange(event) {

    const newName = event.target.value;
    console.log(newName)
    setCityName(newName);
  }


  function apiCall(long, lat) {

    //console.log(city)

    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&exclude=hourly,minutely&appid=c10c5e7e4f82f72911db41a854f744cf';
    fetch(url).then(resp => resp.json()).then(resp => {

      console.log(resp);
      setCurrentWeatherInfo(resp.current);
      setForecastList(resp.daily);
      console.log(forecastList)
      setIsLoaded(true);

    }
      , e => {
        setError(e);
        setIsLoaded(true)

      }

    )
  }


  function getCoordinates(city) {
    console.log("getting coordinates")
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + city + '.json?limit=1&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1Ijoic2ctMTMwNiIsImEiOiJja2JhdzhqaGYwczNnMnVudmhscG54dWI1In0.V4z93gafD4UPiM87U4mLYg';

    fetch(geoUrl).then(resp => resp.json()).then(resp => {
      const coord = resp.features[0].center;
      console.log(coord);
      setCityName(resp.features[0].place_name);
      apiCall(coord[0], coord[1]);

    },
      error => console.log(error)
    );


  }



  function getForecast(city) {
    const url = 'api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}'

  }



  return (
    <ThemeProvider theme={theme}>

      <div class="App">
        <AppBar >
          <Toolbar>
            <IconButton ><WeatherIcon style={{ color: "white", width: 50, height: 50 }}></WeatherIcon></IconButton>
            <Typography variant="h4" component="body1">Weather App</Typography>

          </Toolbar>

        </AppBar>

        <Container>
          <div>
            <Typography variant="h2" component="h1" style={{ color: "#141e30" }}>Enter the City Name!</Typography>

            <form style={{ marginBottom: 20 }}>

              <Grid container justifyContent="center" alignItems="center">
                <TextField onChange={handleChange} variant="outlined" size="small" style={{ backgroundColor: "white" }}></TextField>
                <IconButton onClick={(event) => {
                  event.preventDefault();
                  getCoordinates(cityName);
                  //                apiCall(cityName);


                }}> <SearchIcon style={{ height: 40, widht: 40, color: "#141e30" }} /> </IconButton>
              </Grid>


            </form>
            {(error) ? <h>{error.message}</h> :

              (isLoaded) ?
                <WeatherCard info={currentWeatherInfo} name={cityName} /> : null
            }

            {(forecastList.length != 0) ?
              <Typography style={{ marginBottom: 20, marginTop: 10, color: "#141e30" }} variant="h4">
                Weekly Forecast :
              </Typography> : null
            }
            {forecastList.map((e, ind) => {
              console.log(e)
              return <CardForecast info={e} id={ind} />
            }

            )
            }



          </div>


        </Container>
      </div >

    </ThemeProvider >
  );
}

export default App;
