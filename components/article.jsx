import React from 'react'

export default class ArticleCell extends React.Component {
  render() {
    return (
      <div className="article-cell">
        <h3 className="article-cell--title">{this.props.title}</h3>
        <p className="article-cell--description">{this.props.description}</p>
      </div>
    )
  }
}
