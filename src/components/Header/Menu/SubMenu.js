import React, { Component }  from 'react'

import PropTypes from 'prop-types';

export class SubMenu extends Component{
  constructor(props) {
    super(props);

    this.state = {
        isOpen: false,
    };
}

toggleSubMenu = () => {
    this.setState((prevState) => ({
        isOpen: !prevState.isOpen,
    }));
};
  

  renderListItem = (item, i) => {

    return (
      <li
        key={i}
        className={`${this.props.className ? ` ${this.props.className} menu__item` : 'menu__item'}`}
        onMouseEnter={this.props.isOpen === true ? this.toggleSubMenu : null}
      // onMouseEnter={this.props.isOpen === true ? this.toggleSubMenu : null}
      // onMouseEnter={this.props.isOpen === true ? this.toggleSubMenu : null}
      // onMouseEnter={this.props.keyElement  ? this.toggleSubMenu : null}
      >
        <a href={``} className={'menu__link'}>{item} </a>
      </li>
    )

  }
render() {
    return (
    <ul className={'menu__sublist menu__sublist--bottom'}>
      {this.props.content.map((item, i) => {
        return this.renderListItem(item, i)
      })
      }
    </ul>
  )
}

}

SubMenu.propTypes = {
  open: PropTypes.bool
}

export default SubMenu
