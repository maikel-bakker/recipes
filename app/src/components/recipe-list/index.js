import React, { useEffect, useState } from 'react'

export default function RecipeList () {
  const [ recipes, setRecipes ] = useState([])

  useEffect(() => {
    fetch(`${process.env.API_URL}/v1/recipes`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setRecipes(data)
      })
  }, [])

  return (
    <ul>
      {recipes.map(recipe => {
        const {
          id,
          title
        } = recipe

        return <li key={id}>{title}</li>
      })}
    </ul>
  )
}
