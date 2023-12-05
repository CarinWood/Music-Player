import './card.css'

export const Card = ({
    title,
    artist,
    img
}) => {
  return (
    <div className='card'>
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
