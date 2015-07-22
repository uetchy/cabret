import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import ArticleCell from './article'

export default class ContentsView extends React.Component {
  render() {
    var files = fs.readdirSync( path.join(process.cwd(), 'content', 'post') ).map( function(file) {
      if (path.extname(file) != ".md") return null;
      var filepath = path.join(process.cwd(), 'content', 'post', file);
      var data = fs.readFileSync( filepath, 'utf8' );
      var mat = matter( data, {delims: '+++', lang: 'toml'} );
      return <ArticleCell
        title={mat.data.title}
        description={mat.data.date}
        draft={mat.data.draft}
        path={filepath} />
    });
    return (
      <div>
        {files}
      </div>
    )
  }
}
