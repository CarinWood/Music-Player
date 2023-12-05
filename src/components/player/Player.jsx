import { useState } from 'react';
import './player.css'
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import { IoMdSkipForward } from "react-icons/io";

export const Player = ({
    songs,
    setSongs,
    isPlaying,
    setIsPlaying,
    audioElem,
    currentSong,
    setCurrentSong
}) => {

    const [showPauseBtn, setShowPauseBtn] = useState(false)

  const playSong = () => {
    setIsPlaying(true)
    setShowPauseBtn(true)
  }  

  const pauseSong = () => {
    setIsPlaying(false)
    setShowPauseBtn(false)
  }    

  const skipBack = () => {
    const index = songs.findIndex(x => x.title === currentSong.title)
    switch (index) {
        case 0: setCurrentSong(songs[6])
        break;
        case 6: setCurrentSong(songs[5])
        break;
        case 5: setCurrentSong(songs[4])
        break;
        case 4: setCurrentSong(songs[3])
        break;
        case 3: setCurrentSong(songs[2])
        break;
        case 2: setCurrentSong(songs[1])
        break;
        case 1: setCurrentSong(songs[0])
        break;
        default: setCurrentSong(songs[0]);
       
    }

    audioElem.current.currentTime = 0
    setShowPauseBtn(false)
    setIsPlaying(false)

  }

  const skipForward = () => {
    const index = songs.findIndex(x => x.title === currentSong.title)
    switch (index) {
        case 0: setCurrentSong(songs[1])
        break;
        case 6: setCurrentSong(songs[0])
        break;
        case 5: setCurrentSong(songs[6])
        break;
        case 4: setCurrentSong(songs[5])
        break;
        case 3: setCurrentSong(songs[4])
        break;
        case 2: setCurrentSong(songs[3])
        break;
        case 1: setCurrentSong(songs[2])
        break;
        default: setCurrentSong(songs[0]);
       
    }

    audioElem.current.currentTime = 0
    setShowPauseBtn(false)
    setIsPlaying(false)

  }



  return (
    <div className='player'>
        <div className='screen'>
            <img 
                className='screen-image'
                src={currentSong.img} 
                alt={currentSong.title} />
        </div>
        <div className='screen-text'>
            <p className='artist'>{currentSong.artist}</p>
            <p className='title'>{currentSong.title}</p>
            
        </div>
        <div className='controls'>
            <IoMdSkipForward className='back' onClick={skipBack}/>
            {showPauseBtn=== false ?
            <FaCirclePlay className='play' onClick={playSong}/>
            :
            <FaCirclePause className='play' onClick={pauseSong}/>
            }
            <IoMdSkipForward className='forward' onClick={skipForward}/>
        </div>
    </div>
  )
}
