import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'

export default function ClaudeRecipe(props) {

    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <ReactMarkdown children={props.recipe}/>
            </article>
        </section>
    )
}