import './StadiumCard.css'
function StadiumCard(props) {

    return <div className='card'>
        <h3>{props.stadium.city}</h3>
        <h3>{props.stadium.sport}</h3>
    </div>
}

export default StadiumCard