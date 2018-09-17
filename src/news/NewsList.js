import React from 'react'
import News from './News'
import { Link } from 'react-router-dom'

let categories = ["Business", "Entertainment", "Health", "Science", "Sports", "Technology"]

const NewsList = (props) => {
  console.log('newslist props are', props)
  // map through newsArticles props to render each <NewsArticle />
  const mapNews = props.news.map(news => <News key={news.title} news={news} />)
  const mapCategories = categories.map(category => {
    return <Link key={category} to={`/news/${category.toLowerCase()}`}>{category}</Link>
  })

  return (
    <div className="news-list">
      {mapCategories}
      <h1>Top News List</h1>
      {mapNews}
      {/* TODO */}
      {/* fetch to backend for each specific category */}
    </div>
  )

}

export default NewsList
