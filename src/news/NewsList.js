import React from 'react'
import News from './News'

const NewsList = (props) => {

  // map through newsArticles props to render each <NewsArticle />
  const mapNews = () => props.news.map(news => <News key={news.id} news={news} />)


  return (
    <div className="news-list">
      <h1>News List</h1>
      {mapNews()}
    </div>
  )

}

export default NewsList
