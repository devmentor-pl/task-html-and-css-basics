import responsive from '../../src/images/responsive.png';
import customizable from '../../src/images/customizable.png';
import design from '../../src/images/design.png';

const te =  'I stumbled upon this website while searching for something entirely different, and I must say, it was a delightful discovery! The sleek and user-friendly design immediately caught my eye, making navigation a breeze';
const elser = 'But on the other hand the loading times are nothing short of agonizing, turning what should be a simple online visit into a test of patience.'

export const review = {

    headline: 'SIMPLE AND BEAUTIFUL',
    list: [
      {
        image: responsive,
        name: 'Rita McDonald',
        text: 'The layout is intuitive, with a clean aesthetic that doesn`t overwhelm the senses. The responsive design ensures a seamless experience across devices, making it easy to enjoy the content on the go.',
        stars: 4
      },
      {
        image: customizable,
        name: 'Tom Gorge',
        text: te, elser,
        stars: 2,
       
      },
      {
        image: design,
        name: 'SLICK AND BEAUTIFUL DESIGN',
        text: 'Trendy and fresh design, fits any website',
        start:5
      },
    ]
  }
  
  export default review