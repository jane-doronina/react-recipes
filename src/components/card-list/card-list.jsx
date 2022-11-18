import './card-list.css';
import Card from "../card/card"

const CardList = ({recipes}) => {
  return <div className="card-list">
    {recipes.map((recipe, index) => {
      return <Card key={index}
      imgSrc={recipe.recipe.image}
      title={recipe.recipe.label}
      time={recipe.recipe.totalTime}
      calories={Math.round(Number(recipe.recipe.calories))} />
      })}
  </div>
}

export default CardList;
