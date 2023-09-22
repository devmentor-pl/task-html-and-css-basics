
import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import data from '../data';
import './styles/reset/reset.css'
import './styles/sass/main.css'
import { Header } from './components/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Main } from './components/Main';

import { toggleHamburger } from './js/toggleHamburger';
import { selectMember } from './js/selectMember';


// ReactDOM.render(<Header {...data}/>, document.querySelector('.header'));

// ReactDOM.render(<Navigation/>, document.querySelector('.header__container__navigation'));
// // ReactDOM.render(<Features {...data}/>, document.querySelector('.features__container'));
// ReactDOM.render(<Main/>, document.querySelector('.main'));
// ReactDOM.render(<Prices {...data}/>, document.querySelector('.pricing__container'));
// ReactDOM.render(<Team {...data}/>, document.querySelector('.team__container'));
const root = createRoot(document.querySelector('#root'));

const App = () => (
        <>
            <Header {...data}></Header>
            <Navigation {...data}></Navigation>
            <Main {...data}></Main>
        </>
);

root.render(<App></App>);


// function App() {
//  return (
//         <div>
//             {'Ola'}
//             {/* <Header {...data}></Header>
//             <Navigation {...data}></Navigation>
//             <Main {...data}></Main>  */}
//         </div>
//     )
// }
   
        



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

// const iconsHamburger = document.querySelector('.hamburger__icon');
// toggleHamburger(iconsHamburger)

// const selectElement = document.getElementById("select__member");
// selectMember(selectElement)




