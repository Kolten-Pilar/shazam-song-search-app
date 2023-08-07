import React, { useState } from "react";
import DisplaySong from './DisplaySong'
import { VITE_API_KEY } from "../../config";

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
      "X-RapidAPI-Key": VITE_API_KEY,
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  // fetch the data from API
  async function fetchSong(e) {
    e.preventDefault();

    // check if the forms are empty
    if (form.title == "") {
      alert("Please Enter a Song Title");
    } else
      try {
        // making the API call
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setSong({ result: result });
      } catch (error) {
        console.log(error);
      }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "title") {
      setForm({ ...form, title: value });
    }
    if (name == "artist") {
      setForm({ ...form, artist: value });
    }
  };
  console.log(form.title, form.artist);

  return (
    <div>
      <span>TrackInfo</span>
      <br />

      <form action="">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        ></input>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          onChange={handleChange}
        ></input>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button onClick={fetchSong}>Submit</button>
      </form>

      {song.result !== undefined ? (
        <div>
          <DisplaySong result={song.result} />
        </div>
      ) : null}
    </div>
  );
}

export default TrackInfo;
