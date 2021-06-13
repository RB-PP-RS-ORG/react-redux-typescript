import React, { useReducer } from 'react'
import { connect } from 'react-redux'
import { addArticle } from './../../store/actionCreators'
type Props = {
    addArticle: (args: IArticle) => void;
    articles: IArticle[]
}

const AddArticle: React.FC<Props> = ({ addArticle, articles }) => {


    const initialState: IArticle = {
        title: "",
        body: ""
    }


    const reducer = (articleValues: IArticle = initialState, action: { actionType: string, actionPayload: string }): IArticle => {
        if (action.actionType === 'addTitle') {
            return {
                ...articleValues,
                title: action.actionPayload
            }
        }
        else if (action.actionType === 'addBody') {
            return {
                ...articleValues,
                body: action.actionPayload
            }
        }
        else if (action.actionType === 'deleteAll') {
            return initialState;
        }
        return articleValues;
    }


    const [state, dispatch] = useReducer(reducer, initialState);





    return (
        <div>
            <div style={{ border: '2px solid black', padding: '20px 20px' }}>
                From Add Article Component:
                {articles.map(article => (
                    <div key={article.id}>
                        <p>{article.id}</p>
                        <p>{article.title}</p>
                        <p>{article.body}</p>
                    </div>
                ))}
            </div>
            <input placeholder="Add Title" onChange={(e) => dispatch({ actionType: 'addTitle', actionPayload: e.target.value })} value={state.title} />
            <input placeholder="Add Body" onChange={(e) => dispatch({ actionType: 'addBody', actionPayload: e.target.value })} value={state.body} />
            <button onClick={() => { addArticle(state); dispatch({ actionType: 'deleteAll', actionPayload: '' }) }}>Add</button>
        </div >
    )
}

const mapStateToProps = (state: ArticleState) => {
    return {
        articles: state.addRemoveReducer.articles
    }
}

const mapDispatchToProps =   {
    addArticle
}


export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);