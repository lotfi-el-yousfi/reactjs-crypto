import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicButtons() {
  /*
/////data zone 
*/
  let [UserName, setUserName] = useState();
  let [PassWord, setPassWord] = useState();

  /*
///// methods zone  
*/
  function login_handler() {
    console.log(UserName, PassWord);
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
            variant="h2"
            gutterBottom
            component="div"
          >
            Login form with 
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
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
                id="outlined-required"
                label="user name"
              />
              <br></br>
              <TextField
                onChange={(e) => {
                  setPassWord(e.target.value);
                }}
                required
                id="outlined-required"
                label="password"
              />
            </div>
          </Box>
          <br></br>
          <Button
            onClick={login_handler}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Login
          </Button>
        </div>
      </center>
    </div>
  );
}
