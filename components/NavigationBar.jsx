import React from 'react'

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation-bar">
        <h1 className="navigation-bar--title">{this.props.title}</h1>
        <p className="navigation-bar--description">{this.props.description}</p>
      </div>
    )
  }
}
