import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
export default function BasicButtons() {
  /*
/////data zone 
*/
  let [Image, setImage] = useState("");
  let url = "https://dog.ceo/api/breeds/image/random";
  /*
///// methods zone  
*/
  function fetch_image() {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setImage(data.message);
        console.log("data :", Image);
      });
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
            width: "1000px",
          }}
        >
          <Typography
            style={{ color: "black" }}
            variant="h4"
            gutterBottom
            component="div"
          >
           Get RANDOM dog image with
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
              <br></br>
              <Button
                onClick={fetch_image}
                variant="contained"
                endIcon={<ChangeCircleIcon />}
              >
                Get new image
              </Button>
            </div>
          </Box>
          <br></br>

          <img
            style={{ height: "500px", width: "500px" }}
            src={Image}
            srcSet={Image}
            alt="image"
            loading="lazy"
          />
          <p  style={{ color:"black" }}>
            {Image}
          </p>
        </div>
      </center>
    </div>
  );
}
