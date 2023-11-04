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
          firstItem: ["The team"],
          className: 'menu__item--parent',
          href: 'team',
          isOpen: true,
          secondItem: ['Ola', 'Ela']
        },
        {
          firstItem: ["Services"],
          className: 'menu__item--parent',
          href: '',
          isOpen: true,
          secondItem: ['Graphic', 'Design'],
          subSubcontent: ['ddd', 'ddddd']
        },
        {
          firstItem: ['Pricing'],
          href: 'pricing',
        },
        {
          firstItem: ['Features'],
          href: 'features',
        },
    ]
}
  

export default header