import React from 'react'

const NewsArticle = (props) => {

  return(
    <div className="news-article">
      <h1>{props.newsArticle.title}</h1>
      <p>{props.newsArticle.body}</p>
    </div>
  )
}

export default NewsArticle
