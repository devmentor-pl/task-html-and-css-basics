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
                    onMouseEnter={this.props.isOpen === true ? this.toggleSubMenu : null}
                >
                   <a href={`#${this.props.href}`} className={'menu__link'}>{this.props.content} </a>
                    {this.state.isOpen && <SubMenu content={this.props.subcontent} className={this.props.className} ></SubMenu> }
                </li>
            </>
        )
    }
}

MenuItem.propTypes = {
    keyElement: PropTypes.number,
    href: PropTypes.string,
    content: PropTypes.string,
    subcontent: PropTypes.string,
    className: PropTypes.string,
    isOpen: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    open: PropTypes.bool,
    openFunc: PropTypes.func
}

export default MenuItem
