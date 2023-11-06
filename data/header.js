import logo from '../src/images/logo.png';
import screen from '../src/images/screen.png'
import { v4 as uuidv4 } from 'uuid';

export const header = {
  logo: logo,
  headline: 'Beautiful Free Nova template',
  buttonText: 'Download free!',
  description: 'A top notch premium quality template for your next web project',
  screen: screen,
  menu: [
    { id: uuidv4(), name: 'Solutions', parent: true, className: 'menu__item--parent' },
    { id: 2, name: 'For small business', childFor: 'Solutions' },
    { id: 3, name: 'From business card websites to landing pages', childFor: 'For small business', },
    { id: 4, name: 'Online store', childFor: 'Solutions' },
    { id: 5, name: 'A fast and easy way to grow sales', childFor: 'Online store' },
    { id: 6, name: 'Blogginng', childFor: 'Solutions' },
    { id: 7, name: 'Everything you need to start a blog', childFor: 'Blogginng' },
    { id: 8, name: 'Enterprise solutions', childFor: 'Solutions' },
    { id: 9, name: 'For those who want to sell websites with Nova', childFor: 'Enterprise solutions' },
    { id: 10, name: 'Hire a professional', childFor: 'Solutions' },
    { id: 11, name: 'Order a website from Nova studio', childFor: 'Hire a professional' },

    { name: 'The team', isOpen: true, parent: true },
   

    { name: 'Features', isOpen: true, parent: true },
    { name: 'Prices', isOpen: true, parent: true },
    { name: 'Resources', isOpen: true, parent: true, className: 'menu__item--parent' },
    { name: 'Nova blog', childFor: 'Resources'},
    { name: 'Tips, inspirations, useful articles and more', childFor: 'Nova blog'},
    { name: 'Knowledge base', childFor: 'Resources'},
    { name: 'Our answers to your most common questions', childFor: 'Knowledge base'},
    { name: 'Guides', childFor: 'Resources'},
    { name: 'Tutorials for different types of websites', childFor: 'Guides'},
    { name: 'Product updates', childFor: 'Resources'},
    { name: 'Information on Nova`s newest features', childFor: 'Product updates'},
    { name: 'Success stories', childFor: 'Resources'},
    { name: 'Inspirational stories from our clients', childFor: 'Success stories'},
    { name: 'Made with Nova', childFor: 'Resources'},
    { name: 'Examples of websites made on our platform', childFor: 'Made with Nova'},
  ]

  // https://weblium.com/create-a-travel-website


}


export default header

