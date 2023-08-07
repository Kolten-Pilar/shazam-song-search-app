import React, { useState } from "react";

function TrackInfo() {
  // initialize state for the forms
  const [form, setForm] = useState({
    title: "",
    artist: "",
  });

  // initialize state for the song info
  const [song, setSong] = useState([]);

  // import the API
  const url =
    "https://shazam.p.rapidapi.com/search?term=a%20milli&locale=en-US&offset=0&limit=5";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  return <div>TrackInfo</div>;
}

export default TrackInfo;
