import * as React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

export default function BasicButtons() {
  /*
/////data zone 
*/
  let [Json_data, setJson_data] = useState("");

  let [Long, setLong] = useState("");
  let [Lat, setLat] = useState("");

  let api_url = `https://www.7timer.info/bin/astro.php?lon=${Long}&lat=${Lat}&ac=0&unit=metric&output=json&tzshift=0`;
  /*
///// methods zone  
*/
  function fetch_data() {
    console.log("Apiurl :", api_url);
    if (api_url) {
      fetch(api_url)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setJson_data(data.dataseries[0]);
          console.log("data :", Json_data);
        });
    }
  }

  //componentDidMount is a method executed whene the  component   Mount
  //componentDidUpdate is a method executed whene the  component   Update
  //componentWillUnmount is a method executed whene the  component   Unmount

  return (
    <div>
      <center>
        <div
          style={{
            marginTop: "50px",
            backgroundColor: "#dadada",
            color: "white",
            padding: "50px",
            width: "400px",
          }}
        >
          <Typography
            style={{ color: "black" }}
            variant="h4"
            gutterBottom
            component="div"
          >
           weather api data "7timer.com"
            <p
              style={{
                fontSize: "50px",
                fontFamily: "consolas",
                backgroundColor: "#007fff",
              }}
            >
              reactjs
            </p>
          </Typography>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="outlined-basic"
                label="past the api url here"
                variant="outlined"
                onChange={(e) => {
                  setLong(e.target.value);
                }}
                style={{ width: "90%" }}
                defaultValue="50.3"
              />
              <br></br>
              <TextField
                id="outlined-basic"
                label="past the api url here"
                variant="outlined"
                onChange={(e) => {
                  setLat(e.target.value);
                }}
                style={{ width: "90%" }}
                defaultValue="10.5"
              />
              <br></br>
              <Button
                onClick={fetch_data}
                variant="contained"
                endIcon={<CloudDownloadIcon />}
                style={{ fontSize: "30px" }}
              >
                fetch json data
              </Button>
              <br></br> <br></br>
            </div>
          </Box>
          <br></br>
        </div>
        {/* 
      
      card area
      */}
        <center>
          <div
            style={{
              backgroundColor: "#dadada",
              marginTop: "20px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            {Json_data && (
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  margin: "10px",
                  padding: "20px",
                  marginTop: "20px",
                  marginLeft: "5%",
                  marginRight: "5%",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="le title"
                  subheader="le subheader"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image="https://wallpaperaccess.com/full/1397712.jpg"
                  alt="Paella dish"
                />
                <CardContent>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem>
                      <ListItemText
                        primary="timepoint"
                        secondary={Json_data.timepoint}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="cloudcover"
                        secondary={Json_data.cloudcover}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="seeing"
                        secondary={Json_data.seeing}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="transparency"
                        secondary={Json_data.transparency}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="lifted_index"
                        secondary={Json_data.lifted_index}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="rh2m" secondary={Json_data.rh2m} />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="temp2m"
                        secondary={Json_data.temp2m}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="prec_type"
                        secondary={Json_data.prec_type}
                      />
                    </ListItem>
                  </List>
                </CardContent>
                
              </Card>
            )}
          </div>
        </center>
      </center>
    </div>
  );
}
