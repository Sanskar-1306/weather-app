import React from "react"
import Card from "@mui/material/Card"
import { CardContent, CardMedia, Typography } from "@mui/material";
import weatherIcon from "./weather-icon.png"
import { Container, Paper, Grid } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WindIcon from '@mui/icons-material/Air';
import HumidityIcon from '@mui/icons-material/Opacity';
import PressureIcon from '@mui/icons-material/Compress';

function WeatherCard(props) {

    const info = props.info;
    const name = props.name;
    console.log(info)
    const date = new Date();
    const url = "http://openweathermap.org/img/wn/" + info.weather[0].icon + "@2x.png";
    const time = date.getUTCHours() + ":" + date.getUTCMinutes();
    const temp = info.temp;
    const feelsLike = info.feels_like;
    const WeatherInfo = info.weather[0].description;;
    const desc = WeatherInfo;
    console.log(desc)
    return <Grid container justifyContent="center" style={{ marginBottom: 20 }} >
        <Grid item xs={4} style={{ background: "linear-gradient(#141e30,#243b55 )", borderRadius: 15, color: "white" }}>

            <Container style={{ marginTop: 10 }}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="body1">{name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>{time}</Typography>
                    </Grid>
                </Grid>

            </Container>



            <img src={url} style={{ width: 100, height: 100 }}></img>

            <Typography variant="body1" style={{ color: "white" }}>{desc}</Typography>


            <Grid container justifyContent="space-between" alignItems="center">

                <Grid xs={5} style={{ padding: "5px 15px" }}>

                    <Grid container styles={{ padding: "10px" }}>
                        <Grid xs={12}>
                            <Grid container>
                                <Grid item xs={4} ><WindIcon /></Grid>
                                <Grid item xs={6} item >{info.wind_speed}km/h</Grid>
                            </Grid>

                        </Grid>

                        <Grid xs={12}>
                            <Grid container >
                                <Grid item xs={4} ><HumidityIcon /></Grid>
                                <Grid item xs={3.5} item >{info.humidity}%</Grid>
                            </Grid>

                        </Grid>

                        <Grid xs={12}>
                            <Grid container >
                                <Grid item xs={4} ><PressureIcon /></Grid>
                                <Grid item xs={3.5} item >{info.pressure}pa</Grid>
                            </Grid>

                        </Grid>


                    </Grid>


                </Grid>
                <Grid xs={5} style={{ padding: "0px 0px 0 0" }}>
                    <Typography variant="h3">{Math.round(temp - 273.15)}°C</Typography>
                </Grid>

            </Grid>
        </Grid>
    </Grid >



}


export default WeatherCard