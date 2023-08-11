import React, { useEffect, useState } from "react";
import DisplaySong from "./DisplaySong";
import { VITE_API_KEY } from "../../config";
import "./App.css";

function TrackInfo() {
  // initialize state for the forms
  const [form, setForm] = useState({
    title: "",
    artist: "",
  });

  // initialize state for the song info
  const [song, setSong] = useState([]);

  // initialize state for favorite songs
  const [favorite, setFavorite] = useState([]);

  // import the API
  const url = `https://shazam.p.rapidapi.com/search?term=${form.title},${form.artist}&locale=en-US&offset=0&limit=5`;
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
        // console.log(result);
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

  // function to add a song to favorites
  const addFavorite = () => {
    setFavorite([...favorite, song.result.tracks.hits[0].track])
  }
  // console.log(form.title, form.artist);
  
    //  load a default song that displays upon page load with useEffect
    //  useEffect(() => {
    //   setForm({ title: 'The Box', artist: 'Roddy Ricch'})
    //   fetchSong()
    // }, []);

  return (
    <div className="main-info">
      <div className="side-bar">
        {/* display current time */}
        {new Date()
          .toLocaleTimeString("en-IT", {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
          })
          .replace("AM", "")
          .replace("PM", "")}

        <div className="middle-buttons">
          <button onClick={addFavorite}>💘</button>
          <button>is</button>
          <button>the</button>
        </div>
        <button>the</button>
      </div>
      <div className="search-info">
        <span>Search for a Song! <br /> </span>(✳ Indicates Required Fields)
        <br />

        <form action="">
          ✳<input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          ></input>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
          <div className="song-display">
            <DisplaySong result={song.result} />
          </div>
        ) : null}
      </div>
      {/* favorite song section */}
      <div className="favorite-songs">
        <h2>Favorite Songs</h2>
        <ul>
          {/* map through the favorite song array initialized with useState */}
          {favorite.map((song, index) => (
            <li key={index}>
              <h3>{song.title} {song.subtitle}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TrackInfo;
