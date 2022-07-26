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
  let [Apiurl, setApiurl] = useState("");
  let url_test = "https://jsonplaceholder.typicode.com/comments";
  /*
///// methods zone  
*/
  function fetch_data() {
    console.log("Apiurl :", Apiurl);
    if (Apiurl) {
      fetch(Apiurl)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setJson_data(data);
          console.log("data :", Json_data);
        });
    }
  }

  useEffect(() => {
    setApiurl(url_test);
  }, []);

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
          Visualize your API data
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
                  setApiurl(e.target.value);
                }}
                style={{ width: "90%" }}
                defaultValue={url_test}
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
                        {" "}
                        {Object.keys(comment).map((_key) => {
                          return (
                            <ListItem>
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
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                );
              })}
          </div>
        </center>
      </center>
    </div>
  );
}
