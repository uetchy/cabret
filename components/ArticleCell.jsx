import React from 'react'
import {exec} from 'child_process'

export default class ArticleCell extends React.Component {
  onClick = () => {
    exec("/usr/bin/open /Applications/MacDown.app " + this.props.filepath)
  }

  render() {
    var description;
    if (this.props.draft) {
      description = "DRAFT";
    } else {
      description = this.props.description;
    }
    return (
      <div className="article-cell" onClick={this.onClick}>
        <h3 className="article-cell--title">{this.props.title}</h3>
        <p className="article-cell--description">{description}</p>
      </div>
    )
  }
}
