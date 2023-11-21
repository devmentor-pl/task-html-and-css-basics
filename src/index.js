
import React from 'react';
import { createRoot } from 'react-dom/client';

import Header from './components/Header';
import { Main } from './components/Main';
import Footer from './components/Footer'
import header from '../data/header';
import footer from '../data/footer';
import main from '../data/main';
import './styles/reset/reset.css'
import './styles/sass/style.css'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

const root = createRoot(document.querySelector('#root'));

const App = () => (
        <>
         <Router>
            <Header {...header} className={'header'}></Header>
            <Main {...main} className={'main'}></Main>
            <Footer {...footer} className={'footer'}></Footer>
      </Router>
       
        </>
);

root.render(<App></App>);





