import React from 'react'

export default class StatusBar extends React.Component {
  constructor(...args) {
    super(...args);
    this.appStore = this.props.context.appStore;
    this.state = {
      sortState: this.appStore.getSortState()
    };
  }

  _onChange(){
    this.setState({
      files: this.fileStore.getFiles()
    });
  }

  handleChangeSort(event){
    this.setState({sortState: event.target.value});
  }

  componentDidMount() {
    this.fileStore.onChange(this._onChange.bind(this));
  }

  componentWillUnmount() {
    this.fileStore.removeAllChangeListeners();
  }

  render() {
    return (
      <div className="status-bar">
        <select value={sortState} onChange={this.handleChangeSort}>
          <option value="date">Date</option>
          <option value="name">Name</option>
        </select>
      </div>
    )
  }
}
