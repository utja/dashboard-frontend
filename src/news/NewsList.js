import React from 'react'
import NewsArticle from './NewsArticle'

const NewsList = (props) => {

  // map through newsArticles props to render each <NewsArticle />
  const mapNewsArticles = () => props.newsArticles.map(newsArticle => <NewsArticle key={newsArticle.id} newsArticle={newsArticle} />)


  return (
    <div className="news-list">
      <h1>News List</h1>
      {mapNewsArticles()}
    </div>
  )

}

export default NewsList
