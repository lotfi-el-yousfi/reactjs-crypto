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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function BasicButtons() {
  /*
/////data zone 
*/
  let [Originaltext, setOriginaltext] = useState("");
  let [Json_error, setJson_error] = useState("");
  let [Btn_color, setBtn_setcolor] = useState("");

  /*
///// methods zone  
*/
  function validate_json() {
    let the_error = "";
    if (Originaltext) {
      try {
        JSON.parse(Originaltext);
        the_error = "good JSON";
        setBtn_setcolor("primary");
      } catch (error) {
        the_error = String(error);
        setBtn_setcolor("error");
      }
    }

    setJson_error(the_error);
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
            JSON validator with
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
              <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                style={{ width: 300, height: 150 }}
                onChange={(e) => {
                  setOriginaltext(e.target.value);
                }}
              />
              <br></br>
              <Button
                onClick={validate_json}
                variant="contained"
                endIcon={<CheckCircleOutlineIcon />}
              >
                validate JSON
              </Button>
              <br></br>
              <br></br>
              {Json_error ? (
                <Button
                  onClick={validate_json}
                  variant="outlined"
                  color={Btn_color}
                  style={{ fontSize: "40px" }}
                
                >
                  {Json_error}
                </Button>
              ) : (
                ""
              )}
            </div>
          </Box>
          <br></br>
        </div>
      </center>
    </div>
  );
}
