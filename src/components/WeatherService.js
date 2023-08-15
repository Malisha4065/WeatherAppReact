import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const WeatherService = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchbox, setSearchbox] = useState("");

  async function getWeather(location) {
    const API_KEY = "6bd27019db3b4dc2a2a142218230808";

    if (location === '') {
      location = 'london';
    }

    const LOCATION_INPUT = location;

    await axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${LOCATION_INPUT}&aqi=no`
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setWeatherData(res.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  // api request
  useEffect(() => {
    console.log(searchbox);
    getWeather(searchbox);
  }, [searchbox]);

  const handleSearch = (e) => {
    setSearchbox(e.target.value);
  }

  return (
    <Container>
      <div>Malisha's WeatherService</div>
      <Container>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        variant="filled"
        onChange={handleSearch}
        sx={{ marginTop: 5 }}
      />
      <TableContainer sx={{ marginTop: 5 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Humidity</TableCell>
              <TableCell align="center">Pressure</TableCell>
              <TableCell align="center">Wind Speed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
              <TableRow
              >
              
                <TableCell align="center">{weatherData?.location.name}</TableCell>
                <TableCell align="center">{weatherData?.current.humidity}</TableCell>
                <TableCell align="center">{weatherData?.current.pressure_mb}</TableCell>
                <TableCell align="center">{weatherData?.current.wind_kph}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </Container>
  );
};



export default WeatherService;
