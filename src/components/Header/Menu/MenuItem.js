import React, { Component } from 'react';
import MenuSubList from './MenuSubList';
import SubMenu from './SubMenu';
import MenuList from './MenuList';
import PropTypes from 'prop-types';

export class MenuItem extends Component {
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

    render() {
        return (
            <>
  
                <li
                    key={this.props.keyElement}
                    className={`${this.props.className ? ` ${this.props.className} menu__item` : 'menu__item'}`}
                    // onMouseEnter={this.props.isOpen === true ? this.toggleSubMenu : null}
                    onMouseEnter={this.props.isOpen === true ? this.toggleSubMenu : null}
                    // onMouseEnter={this.props.keyElement  ? this.toggleSubMenu : null}
               
                >
                   <a href={`#${this.props.href}`} className={'menu__link'}>{this.props.content} </a>
                    {this.state.isOpen && <SubMenu content={this.props.subcontent} ></SubMenu> }
                   
              
                   
                </li>
             
            </>

        )
    }
}

MenuItem.propTypes = {
    className: PropTypes.string,
    keyElement: PropTypes.number,
    content: PropTypes.string,
    href: PropTypes.string

}

export default MenuItem
