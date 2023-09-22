
import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import data from '../data';
import './styles/reset/reset.css'
import './styles/sass/main.css'
import { Header } from './components/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Main } from './components/Main';
import Footer from './components/Footer'

import { toggleHamburger } from './js/toggleHamburger';
import { selectMember } from './js/selectMember';


const root = createRoot(document.querySelector('#root'));

const App = () => (
        <>
            <Header {...data}></Header>
            <Main {...data}></Main>
            <Footer {...data}></Footer>
        </>
);

root.render(<App></App>);


const iconsHamburger = document.querySelector('.hamburger__icon');
toggleHamburger(iconsHamburger)

// const selectElement = document.getElementById("select__member");
// selectMember(selectElement)



