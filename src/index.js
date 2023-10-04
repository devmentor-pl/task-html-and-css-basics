
import React from 'react';
import { createRoot } from 'react-dom/client';
import data from '../data';
import Header from './components/Header/Header';
import { Main } from './components/Main';
import Footer from './components/Footer'
import './styles/reset/reset.css'
import './styles/sass/style.css'
import header from '../data/header';

const root = createRoot(document.querySelector('#root'));

const App = () => (
        <>
            <Header {...header}></Header>
            <Main {...data}></Main>
            <Footer {...data}></Footer>
        </>
);

root.render(<App></App>);





