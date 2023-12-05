import './card.css'

export const Card = ({
    title,
    artist,
    img,
    id,
    currentSong,
    setCurrentSong,
    songs,
    setShowPauseBtn,
    setIsPlaying
}) => {

    const setSong = () => {
        if(id === 0) {
            setCurrentSong(songs[6])
        } else {
            setCurrentSong(songs[id -1])
        }
    setShowPauseBtn(false)
    setIsPlaying(false)

    }

  return (
    <div 
    className={currentSong.id === id ? 'card bg-active' : 'card'}
    onClick={setSong}
    >
          <img 
            className='cover-image'
            src={img} 
            alt={title}
        />
        <div className='card-text'>
            <p className='artist'>{artist}</p>
            <p className='title'>{title}</p>
        </div>

    </div>
  )
}
