import React from 'react'

import ArticleCell from './ArticleCell'

export default class Files extends React.Component {
  constructor(...args) {
    super(...args);
    this.fileStore = this.props.context.fileStore;
    this.state = {
      files: this.fileStore.getFiles()
    };
  }

  _onChange() {
    this.setState({
      files: this.fileStore.getFiles()
    });
  }

  componentDidMount() {
    this.fileStore.onChange(this._onChange.bind(this));
  }

  componentWillUnmount() {
    this.fileStore.removeAllChangeListeners();
  }

  render() {
    let { context } = this.props;
    var files = this.state.files.map(function(file, i){
      return <ArticleCell
        key={'article-'+i}
        context={context}
        title={file.title}
        description={file.date}
        draft={file.draft}
        filepath={file.path} />
    });
    return (
      <div>
        {files}
      </div>
    )
  }
}
