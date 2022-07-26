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
  let [Originaltext, setOriginaltext] = useState("");
  let [GeneratedText, setGeneratedText] = useState("");

  /*
///// methods zone  
*/
  function miniscule_to_majiscule() {
    if (Originaltext) {
      let text = String(Originaltext);
      setGeneratedText(encodeURIComponent(text));
    }
  }
  function majiscule_to_miniscule() {
    if (Originaltext) {
      let text = String(Originaltext);
      setGeneratedText(decodeURIComponent(text));
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
            Decode from URL-encoded format with
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
                onClick={miniscule_to_majiscule}
                variant="contained"
                endIcon={<ChangeCircleIcon />}
              >
                encode url
              </Button>
              <br></br> <br></br>
              <Button
                onClick={majiscule_to_miniscule}
                variant="contained"
                endIcon={<ChangeCircleIcon />}
              >
                decode url
              </Button>
              <br></br> <br></br>
              <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                value={GeneratedText}
                style={{ width: 300, height: 150 }}
              />
            </div>
          </Box>
          <br></br>
        </div>
      </center>
    </div>
  );
}
