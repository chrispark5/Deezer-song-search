import "./App.css";
import { useState, useEffect } from "react";
import SongCard from "./SongCard";
require("dotenv").config();
const apiKey = process.env.API_KEY;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const App = () => {
  useEffect(() => {
    searchSongs("Rose Colored");
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchSongs(searchTerm);
    }
  };

  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchSongs = async (title) => {
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${title}&limit=10`,
      options
    );
    var res = await response.json();
    setSongs(res.data);
    console.log(res.data);
  };
  return (
    <div className="App">
      <h1 id="appName">Search for songs</h1>

      <div className="search">
        <input
          id="searchBar"
          placeholder="Search for songs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={() => {
            searchSongs(searchTerm);
          }}
        >
          Search
        </button>
      </div>
      {songs?.length > 0 ? (
        <div className="container">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Songs founds</h2>
        </div>
      )}
    </div>
  );
};

export default App;
