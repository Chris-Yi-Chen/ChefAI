import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import {getRecipeFromMistral} from '../ai'

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["carrots", "potatoes", "onions", "celery"])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log(recipeMarkdown)
        setRecipe(recipeMarkdown)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type='text'
                    placeholder="e.g. carrots"
                    aria-label="Add Ingredient Input"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            {recipe != "" && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}