import React from 'react'

import Article from './Article'

export default class Articles extends React.Component {
  constructor(...args) {
    super(...args);
    this.fileStore = this.props.context.fileStore;
    this.state = {
      files: this.fileStore.getFiles(),
      sortState: "date"
    };

    this.sortAlgorithms = {
      name: (a, b) => {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        if (titleA < titleB) {return -1}
        if (titleA > titleB) {return 1}
        return 0;
      },
      date: (a, b) => {
        return new Date(b.date) - new Date(a.date)
      }
    }
  }

  _onChange = () => {
    this.setState({
      files: this.fileStore.getFiles()
    });
  }

  handleChangeSort = (event) => {
    this.setState({sortState: event.target.value});
  }

  componentDidMount() {
    this.fileStore.onChange(this._onChange.bind(this));
  }

  componentWillUnmount() {
    this.fileStore.removeAllChangeListeners();
  }

  render() {
    let { context } = this.props;
    let sortState = this.state.sortState;
    let files = this.state.files
      .sort(this.sortAlgorithms[this.state.sortState])
      .map(function(file, i){
        return <Article
          key={'article-'+i}
          context={context}
          title={file.title}
          description={file.date}
          draft={file.draft}
          filepath={file.path} />
      });
    return (
      <div className="articles">
        <select value={sortState} onChange={this.handleChangeSort}>
          <option value="date">Date</option>
          <option value="name">Name</option>
        </select>
        {files}
      </div>
    )
  }
}
