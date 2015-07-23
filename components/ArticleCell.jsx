import React from 'react'

export default class ArticleCell extends React.Component {
  constructor(...args) {
    super(...args);
    this.appAction = this.props.context.appAction;
  }

  onClick = () => {
    this.appAction.openEditor(this.props.filepath);
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
