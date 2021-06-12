import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

const ListArticle: React.FC = () => {

    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
    )



    return (
        <div>
            {articles.map(article => (
                <div key={article.id}>
                    <p>{article.id}</p>
                    <p>{article.title}</p>
                    <p>{article.body}</p>
                </div>
            ))}
        </div>
    )

}

export default ListArticle;