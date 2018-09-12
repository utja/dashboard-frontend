import React from 'react'
import NewsList from './NewsList'

const NEWSENDPOINT = 'http://localhost:3000/api/v1/news'


class NewsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      newsArticles: []
    }
  }

  // TODO: SET UP DATABASE
  // on start of application, load some news articles

  componentDidMount(){
    // once mounted, set state with data from backend (NEWSENDPOINT)
    this.getNews().then(data => this.setState({newsArticles: data}))
  }

  //async, await to fetch news articles from database
  getNews = async () => {
    try {
      const newsData = await fetch(NEWSENDPOINT).then(r => r.json())
      return newsData
    } catch (err) {
      console.log('hello', err)
    }
  }


  render(){
    return (
      <div className="news-container">
        <h1>News Container</h1>
        <NewsList newsArticles={this.state.newsArticles}/>
      </div>
    )
  }

}

export default NewsContainer
