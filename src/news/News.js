import React from 'react'

const News = (props) => {

  return(
    <div className="news">
      <h1>{props.news.title}</h1>
      <p>{props.news.body}</p>
    </div>
  )
}

export default News
