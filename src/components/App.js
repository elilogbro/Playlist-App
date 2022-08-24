import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLinks from './NavLinks';
import About from './About';
import SongList from './SongList';
import FavoriteSongList from './FavoriteSongList';




function App() {
  
  const [songs, setSongs] = useState([])
  const [songGenre, setSongGenre] = useState("")
  const [favorite, setFavorite] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/songs')
            .then(res => res.json())
            .then(data => {  
              setSongs(data)
            })
          }, [])
          
          const addNewSong = (newSong) => {
            setSongs([...songs, newSong])
        }

  let filteredSongs = songs.filter(song => song.genre.toLowerCase().includes(songGenre.toLowerCase()))

  const handleDeletedSong = (id) => {
    setSongs(songs.filter(song => id !== song.id))
    setFavorite(favorite.filter(song => id !== song.id))
    console.log('from app')
  }
    
   
  return (
    <div>
      <BrowserRouter>
        <NavLinks />
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/songs" element={<SongList 
            setSongs={setSongs} 
            addNewSong={addNewSong} 
            songs={filteredSongs} 
            setSongGenre={setSongGenre} 
            favorite={favorite} 
            setFavorite={setFavorite} 
            handleDeletedSong={handleDeletedSong}/>}
            />
            <Route path="/favorite-songs" element={<FavoriteSongList 
            favorite={favorite} 
            setFavorite={setFavorite}
            />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
