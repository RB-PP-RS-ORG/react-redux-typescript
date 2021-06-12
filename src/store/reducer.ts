import * as actionTypes from './actionTypes';

const initialState: ArticleState = {
    articles: [
        {
            id: 1,
            title: 'Hi Rohan',
            body: 'Hi, I am RhnSharma5113, the ultimate open source contributor.'
        }
    ]
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
): ArticleState => {
    let originalArticles = [...state.articles];
    let lastArticle =  originalArticles[originalArticles.length - 1];
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            console.log(originalArticles)
            let newArticle: IArticle = {
                id:  lastArticle.id ? lastArticle.id + 1 : 1,
                body: action.article.body,
                title: action.article.title
            }
            originalArticles.push(newArticle);

            return {
                ...state,
                articles: originalArticles
            }
        case actionTypes.REMOVE_ARTICLE:
            let articleIndex = originalArticles.findIndex((a: IArticle) => a.id === action.article.id);
            originalArticles.splice(articleIndex, 1);
            return {
                ...state,
                articles: originalArticles
            }
        default:
            return state;
    }
}


export default reducer;