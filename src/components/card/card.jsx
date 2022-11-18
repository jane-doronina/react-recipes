import './card.css';

const Card = ({imgSrc, title, time, calories}) => {
  return (
    <div className="card">
      <img alt="monster" src={imgSrc} />
      <div className="card-info">
      <h2>{title}</h2>
        <p>Cooking time: {time}</p>
        <p>Calories: {calories}</p>
      </div>
    </div>
  );
}

export default Card;
