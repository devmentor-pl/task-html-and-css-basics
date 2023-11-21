import logo from '../src/images/logo.png';
import screen from '../src/images/hero.jpg'
import { v4 as uuidv4 } from 'uuid';

export const header = {
  logo: logo,
  headline: 'The best solution for your website concept with Nova',
  description: 'No big investements at a start',
  screen: screen,
  menu: [
    { id: uuidv4(), name: 'Solutions', idSection: 'solutions', elementList: true, className: 'menu__item--parent', parentSubList: true },
    { id: uuidv4(), name: 'For small business', childFor: 'Solutions' },
    { id: uuidv4(), name: 'From business card websites to landing pages', childFor: 'For small business', },
    { id: uuidv4(), name: 'Online store', childFor: 'Solutions' },
    { id: uuidv4(), name: 'A fast and easy way to grow sales', childFor: 'Online store' },
    { id: uuidv4(), name: 'Blogginng', childFor: 'Solutions' },
    { id: uuidv4(), name: 'Everything you need to start a blog', childFor: 'Blogginng' },
    { id: uuidv4(), name: 'Enterprise solutions', childFor: 'Solutions' },
    { id: uuidv4(), name: 'For those who want to sell websites with Nova', childFor: 'Enterprise solutions' },
    { id: uuidv4(), name: 'Hire a professional', childFor: 'Solutions' },
    { id: uuidv4(), name: 'Order a website from Nova studio', childFor: 'Hire a professional' },
    { id: uuidv4(), name: 'The team', idSection:'team', isOpen: true, elementList: true},
    { id: uuidv4(), name: 'Features', idSection:'features', isOpen: true, elementList: true },
    { id: uuidv4(), name: 'Pricing', idSection: 'pricing', isOpen: true, elementList: true },
    { id: uuidv4(), name: 'Resources', isOpen: true, elementList: true, className: 'menu__item--parent', parentSubList: true},
    { id: uuidv4(), name: 'Nova blog', childFor: 'Resources'},
    { id: uuidv4(), name: 'Tips, inspirations, useful articles and more', childFor: 'Nova blog'},
    { id: uuidv4(), name: 'Knowledge base', childFor: 'Resources'},
    { id: uuidv4(), name: 'Our answers to your most common questions', childFor: 'Knowledge base'},
    { id: uuidv4(), name: 'Guides', childFor: 'Resources'},
    { id: uuidv4(), name: 'Tutorials for different types of websites', childFor: 'Guides'},
    { id: uuidv4(), name: 'Product updates', childFor: 'Resources'},
    { id: uuidv4(), name: 'Information on Nova`s newest features', childFor: 'Product updates'},
    { id: uuidv4(), name: 'Success stories', childFor: 'Resources'},
    { id: uuidv4(), name: 'Inspirational stories from our clients', childFor: 'Success stories'},
    { id: uuidv4(), name: 'Made with Nova', childFor: 'Resources'},
    { id: uuidv4(), name: 'Examples of websites made on our platform', childFor: 'Made with Nova'},
  ]

  // https://weblium.com/create-a-travel-website
}


export default header

