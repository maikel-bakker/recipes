import React from 'react'
import ReactDOM from 'react-dom'
import RecipeList from 'app/src/components/recipe-list'

const root = document.getElementById('root')

ReactDOM.render(
  <div>
    <h1>Recipes</h1>
    <RecipeList />
  </div>
  , root
)
