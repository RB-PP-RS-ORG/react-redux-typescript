interface IArticle {
    id?: number
    title: string
}
/*
****
// Declaration Merge (Not possible with type)
****
*/

interface IArticle {
    body: string
}

type ArticleState = any

type ArticleAction = {
    type: string
    article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction