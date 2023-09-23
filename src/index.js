
import React from 'react';
import { createRoot } from 'react-dom/client';
import data from '../data';
import './styles/reset/reset.css'
import './styles/sass/style.css'
import { Header } from './components/Header';
import { Main } from './components/Main';
import Footer from './components/Footer'


const root = createRoot(document.querySelector('#root'));

const App = () => (
        <>
            <Header {...data}></Header>
            <Main {...data}></Main>
            <Footer {...data}></Footer>
        </>
);

root.render(<App></App>);





