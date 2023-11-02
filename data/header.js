import logo from '../src/images/logo.png';
import screen from '../src/images/screen.png'

export const header = {
    logo :logo,
    headline: 'Beautiful Free Nova template', 
    buttonText: 'Download free!',
    description: 'A top notch premium quality template for your next web project',
    screen : screen,
    menu: [
        {
          content: "The team",
          href: 'team',
        },
        {
          content: "Services",
          subcontent: ['Graphic Design'],
        },
        {
          content: 'Pricing',
          href: 'pricing',
        },
        {
          content: 'Features',
          href: 'features',
        },
    ]
}
  

export default header