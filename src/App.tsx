import React from 'react';
import AddArticle from './components/AddArticle'
import AddArticleUseDispatch from './components/AddArticle/addArticleUseDispatch'
import ListArticle from './components/ListArticle'

function App() {
  return (
    <div className="App">
      <AddArticle />
      <AddArticleUseDispatch />
      <ListArticle />
    </div>
  );
}

export default App;
