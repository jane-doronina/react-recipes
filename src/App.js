import React, { useState, useEffect }  from 'react';
import './App.css';
import SearchBox from "./components/search-box/search-box"
import CardList from "./components/card-list/card-list"

const App = () => {
  const [searchBox, setSearchField] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes)

  useEffect(() => {
    fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=f4f6595c&app_key=06796fba12f3184c62b71dbda7caaff7&cuisineType=Italian")
      .then(response => response.json())
      .then((data) => setRecipes(data.hits))
  }, []);

  useEffect(() => {
    const filtered = recipes.filter((recipe) => recipe.recipe.label.toLowerCase().includes(searchBox));
    setFilteredRecipes(filtered);
  }, [searchBox, recipes]);


  const handleSearch = (event) => {
    setSearchField(event.target.value.toLowerCase());
  }

  return (
    <div className="container">
      <h1>Recipes List</h1>
      <SearchBox placeholder="Search for recipes" className="form-control" handleChange={handleSearch} />
      <CardList recipes={filteredRecipes} />
    </div>
  );
}

export default App;
