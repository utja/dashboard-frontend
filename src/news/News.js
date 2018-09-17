import React from 'react'

const News = (props) => {
  // console.log(props)

  return(
    <div className="news">
      <h1>{props.news.title}</h1>
      <p>{props.news.name}</p>
      <p>{props.news.description}</p>
      <p>{props.news.url}</p>
      <img src={props.news.urlToImage} alt=""/>
    </div>
  )
}

export default News
