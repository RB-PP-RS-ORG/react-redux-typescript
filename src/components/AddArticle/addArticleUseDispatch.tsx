import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { addArticle } from './../../store/actionCreators'

const AddArticleUseDispatch: React.FC = () => {


    const initialState: IArticle = {
        title: "",
        body: ""
    }

    const reduxDispatch: Dispatch<any> = useDispatch();




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
            <input placeholder="Add Title" onChange={(e) => dispatch({ actionType: 'addTitle', actionPayload: e.target.value })} value={state.title} />
            <input placeholder="Add Body" onChange={(e) => dispatch({ actionType: 'addBody', actionPayload: e.target.value })} value={state.body} />
            <button onClick={() => { reduxDispatch(addArticle(state)); dispatch({ actionType: 'deleteAll', actionPayload: '' }) }}>Add</button>
        </div >
    )
}

export default AddArticleUseDispatch;