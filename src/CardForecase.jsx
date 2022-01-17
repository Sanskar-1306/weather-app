import React from "react"
import { Container, Grid, Typography } from "@mui/material/";
import WbSunny from "@mui/icons-material/WbSunny";

function CardForecast(props) {

    const info = props.info;
    console.log(info)
    const tempMax = Math.round(info.temp.max - 273.15);
    const tempMin = Math.round(info.temp.min - 273.15);
    const url = "http://openweathermap.org/img/wn/" + info.weather[0].icon + "@2x.png";
    const currentDate = new Date(new Date().getTime() + (props.id * 24 * 60 * 60 * 1000));
    const day = currentDate.getDay();
    const dateNumber = currentDate.getDate();
    const desc = info.weather[0].description


    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return <div>

        <Container>
            <Grid container justifyContent="center">
                <Grid container xs={6} alignItems="center" justifyContent="flex-start" style={{ background: "linear-gradient( to top right ,#243b55,#141e30)", borderRadius: 2, color: "white", marginBottom: 1 }}>

                    <Grid item xs={6}>
                        <Grid container alignItems="center" justifyContent="center" style={{ marginLeft: 15 }} >

                            <Grid item xs={6}>
                                <Typography align="left" variant="body1"> {days[day]}, {dateNumber}</Typography>
                            </Grid>

                            <Grid item xs={6}>

                                <Typography align="left" variant="h6"> {tempMax}°/{tempMin}°C</Typography>

                            </Grid>

                        </Grid>
                    </Grid>


                    <Grid item xs={5} style={{ marginLeft: 20 }}>
                        <Grid container alignItems="center">
                            <Grid>
                                <img src={url} style={{ width: 40, height: 40 }} />
                            </Grid>

                            <Grid>
                                <Typography variant="body1"> {desc}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </Container>

    </div >
}

export default CardForecast;