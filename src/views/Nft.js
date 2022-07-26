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
  let url_test = "https://api.opensea.io/api/v1/assets?format=json";
  /*
///// methods zone  
*/
  function fetch_data() {
    fetch(url_test)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setJson_data(data.assets);
        console.log("data :", Json_data);
      });
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
            NFT work off art with
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
                    sx={{ maxWidth: 500 }}
                    key={index}
                    style={{ margin: "10px", padding: "20px" }}
                  >
                    <CardHeader
                      avatar={<Avatar src={comment.owner.profile_img_url} />}
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={comment.name}
                      subheader={comment.id}
                    />
                    <CardMedia
                      component="img"
                      height="500px"
                      image={comment.image_url}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                        style={{
                          wordWrap: "break-word",
                        }}
                      >
                        <ListItem>
                          <ListItemText primary="id" secondary={Json_data.id} />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="num_sales"
                            secondary={comment.num_sales}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="image_url"
                            secondary={comment.image_url}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="name"
                            secondary={comment.name}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="permalink"
                            secondary={comment.permalink}
                          />
                        </ListItem>
                        <ListItem>
                          {/* <ListItemText
                            primary="owner.user.username"
                            secondary={comment.owner.user.username}
                          /> */}
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="owner.user.profile_img_url"
                            secondary={comment.owner.profile_img_url}
                          />
                        </ListItem>
                        <ListItem>
                          {/* <ListItemText
                            primary="owner.user.address"
                            secondary={comment.owner.user.address}
                          /> */}
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="token_id"
                            secondary={comment.token_id}
                          />
                        </ListItem>
                      </List>
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
