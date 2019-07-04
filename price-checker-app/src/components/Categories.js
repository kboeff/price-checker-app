import React, { Component } from 'react';

class CategoriesButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Not hidden by default
      isHidden: false,
    };
    this.toggleCats = this.toggleCats.bind(this);
  }

  toggleCats() {
    this.setState(oldState => ({ isHidden: !oldState.isHidden }));
  }

  render() {
    const { title, children } = this.props;
    const { isHidden } = this.state;
    return (
      <div className="categories">
        <div className="catTitle round-btn" onClick={ this.toggleCats }>
          { title }
        </div>
        { isHidden && children && (
          <div className="boxContent">
            { children }
          </div>
        )}
      </div>
    );
  }
}


export default CategoriesButton;