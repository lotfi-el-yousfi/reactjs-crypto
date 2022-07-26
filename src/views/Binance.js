import * as React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
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

  let api_url = `https://api2.binance.com/api/v3/ticker/24hr`;
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
          setJson_data(data.slice(0, 200));
          console.log("data :", Json_data);
        });
    }
  }

  useEffect(() => {
    fetch_data();
  }, []);

  //componentDidMount is a method executed whene the  component   Mount
  //componentDidUpdate is a method executed whene the  component   Update
  //componentWillUnmount is a method executed whene the  component   Unmount

  return (
    <div>
      <center>
        <Typography
          style={{ color: "black" }}
          variant="h1"
          gutterBottom
          component="div"
        >
            <p> Binance data &#128178;</p>
          <p
            style={{
              fontSize: "50px",
              fontFamily: "consolas",
              backgroundColor: "#007fff",
            }}
          >
            with reactjs
          </p>
        </Typography>
        <center>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              backgroundColor: "#dadada",
              marginTop: "20px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            {Json_data.length > 0 &&
              Json_data.map((comment, index) => {
                return (
                  <Card
                    sx={{ maxWidth: 345 }}
                    key={index}
                    style={{ margin: "10px", padding: "20px" }}
                  >
                    <CardHeader
                    //   avatar={
                    //     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    //       <p>&#128178;</p>
                    //     </Avatar>
                    //   }
                      action={
                        <IconButton aria-label="settings">
                          <CurrencyBitcoinIcon />
                        </IconButton>
                      }
                      title={comment.symbol}
                      subheader={comment.lastprice}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      image="https://images.unsplash.com/photo-1625207897487-af5f478c1d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmluYW5jZXxlbnwwfHwwfHw%3D&w=1000&q=80"
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
                        {" "}
                        {Object.keys(comment).map((_key, i) => {
                          return (
                            <ListItem key={i}>
                              <ListItemText
                                primary={_key}
                                secondary={comment[_key]}
                              />
                            </ListItem>
                          );
                        })}{" "}
                      </List>
                      {/* <Typography variant="body2" color="text.secondary">
                        {comment.body}
                      </Typography> */}
                    </CardContent>
                    
                  </Card>
                );
              })}
          </div>
        </center>
      </center>
    </div>
  );
}
