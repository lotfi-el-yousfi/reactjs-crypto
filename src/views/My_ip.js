import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

export default function BasicButtons() {
  /*
/////data zone 
*/
  let [Ip_adresse, setIp_adresse] = useState("");

  let api_url = `https://api.ipify.org/?format=json`;
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
          setIp_adresse(data.ip);
          console.log("data :", Ip_adresse);
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
          <p> Get your IP Adresse </p>
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
            {Ip_adresse.length > 0 && (
              <p
                style={{
                  color: "black",
                  fontSize: "30px",
                }}
              >
                My Ip adress is :::::{Ip_adresse}
              </p>
            )}
          </div>
        </center>
      </center>
    </div>
  );
}
