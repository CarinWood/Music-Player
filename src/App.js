import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Player } from './components/player/Player';
import { songList } from './data/songList';
import { Card } from './components/card/Card';


function App() {
  const [songs, setSongs] = useState(songList)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const audioElem = useRef()

  useEffect(() => {
    if(isPlaying) {
      audioElem.current.play()
    } else {
      audioElem.current.pause()
    }
  }, [isPlaying])

  return (
    <div className="app">
        <audio src={currentSong.audio} ref={audioElem}/>

        <div className='player'>
        <Player
        songs={songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        />
        </div>
        <div className='play-list'>
          {songs.map(song => {
            return <Card 
            key={song.id} 
            artist={song.artist} 
            title={song.title} 
            img={song.img}
          />
          })}
        </div>
    </div>
  );
}

export default App;
