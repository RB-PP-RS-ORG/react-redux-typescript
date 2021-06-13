import React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { editArticle } from './../../store/actionCreators'
const ListArticle: React.FC = () => {

    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.editReducer.articles,
        shallowEqual
    )

    const disptach: Dispatch<any> = useDispatch()

    return (
        <div>
            {articles.map(article => (
                <div key={article.id!}>
                    <p>{article.id}</p>
                    <p>{article.title}</p>
                    <textarea rows={30} cols={80} onChange={(e) => disptach(editArticle({ id: article.id!, body: e.target.value, title: article.title }))} >
                        {article.body}
                    </textarea>
                </div>
            ))}
        </div>
    )

}

export default ListArticle;