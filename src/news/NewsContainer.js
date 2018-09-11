import React from 'react'
import NewsList from './NewsList'

class NewsContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      newsArticles: []
    }
  }

  // on start of application, load some news articles
  componentDidMount(){
    //async, await to fetch news articles from database
  }

  render(){
    return (
      <div className="newscontainer">
        <h1>Hello from News Container</h1>
        <NewsList />
      </div>
    )
  }

}

export default NewsContainer
