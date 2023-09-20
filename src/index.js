import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Features } from './components/Features';
import { Prices } from './components/Prices';
import { Team } from './components/Team';
import { toggleHamburger } from './js/toggleHamburger';
import { selectMember } from './js/selectMember';
import { Images } from './js/Images';

ReactDOM.render(<Header {...data}/>, document.querySelector('.header'));
ReactDOM.render(<Navigation/>, document.querySelector('.navigation'));
ReactDOM.render(<Navigation/>, document.querySelector('.navigation'));
ReactDOM.render(<Features {...data}/>, document.querySelector('.features__container'));
ReactDOM.render(<Prices {...data}/>, document.querySelector('.pricing__container'));
ReactDOM.render(<Team {...data}/>, document.querySelector('.team__container'));

const iconsHamburger = document.querySelector('.hamburger__icon');
toggleHamburger(iconsHamburger)

const selectElement = document.getElementById("select__member");
selectMember(selectElement)






