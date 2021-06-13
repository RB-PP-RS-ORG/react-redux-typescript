import * as actionTypes from './actionTypes';
import { initialState2 } from './initialState';

const reducer2 = (
    state: ArticleState = initialState2,
    action: ArticleAction
): ArticleState => {
    let originalArticles = [...state.articles];
    switch (action.type) {
        case actionTypes.EDIT_ARTICLE:
            let articleIndex = originalArticles.findIndex((a: IArticle) => a.id === action.article.id);
            let article = originalArticles[articleIndex];
            article.body = action.article.body;
            originalArticles[articleIndex] = article;
            return {
                ...state,
                articles: originalArticles
            }
        default:
            return state;
    }
}


export default reducer2;