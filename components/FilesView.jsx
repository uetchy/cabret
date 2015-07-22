import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import ArticleCell from './ArticleCell'

export default class FilesView extends React.Component {
  constructor(...args) {
    super(...args);
    this.fileStore = this.props.context.fileStore;
    this.props.context.appAction.loadFiles();
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
    var files = this.state.files.map(function(file){
      return <ArticleCell
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