import './styles.css'
function Card({image,info}) {
  return (
    <div className='card'>
        <img src={image} className='cardimg' />
        <h4>{info}</h4>
    </div>
  )
}

export default Card