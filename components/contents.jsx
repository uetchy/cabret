import React from 'react'
import remote from 'remote'
import fs from 'fs'
import path from 'path'

import ArticleCell from './article'

export default class ContentsView extends React.Component {
  getInitialState() {
    return {
      filesData: []
    }
  }

  componentDidMount() {

  }

  render() {
    var files = fs.readdirSync( path.join(process.cwd(), 'content', 'post') ).map( function(file) {
      return <ArticleCell title={file} description={file} />
    });
    return (
      <div>
        {files}
      </div>
    )
  }
}
