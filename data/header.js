import logo from '../src/images/logo.png';
import screen from '../src/images/screen.png'

export const header = {
    logo :logo,
    headline: 'Beautiful Free Nova template', 
    buttonText: 'Download free!',
    description: 'A top notch premium quality template for your next web project',
    screen : screen,
  //   menu: [
  //       {
  //         firstItem: ["The team"],
  //         className: 'menu__item--parent',
  //         href: 'team',
  //         isOpen: true,
  //         secondItem: ['Ola', 'Ela']
  //       },
  //       {
  //         firstItem: ["Services"],
  //         className: 'menu__item--parent',
  //         href: '',
  //         isOpen: true,
  //         secondItem: ['Graphic'['ddd', 'ddddd'], 'Design'],
  //         thirdItem: []
  //       },
  //       {
  //         firstItem: ['Pricing'],
  //         href: 'pricing',
  //       },
  //       {
  //         firstItem: ['Features'],
  //         href: 'features',
  //       },
  //   ],

  //   menu2: [
  //     {
  // team: {
  //       teamName: "The team",
  //       className: 'menu__item--parent',
  //       href: 'team',
  //       isOpen: true,
  //       secondItem: ['Ola', 'Ela']
  //     },
  //   },

  //   {
  //      service: {
  //       teamName: ["Service"],
  //       className: 'menu__item--parent',
  //       href: 'team',
  //       isOpen: true,
  //       secondItem: ['Ola', 'Ela']
  //     },
  //   }
      

     
  //   ],
  
menu: [
  {id:1, name:'Solutions', parent:true, className: 'menu__item--parent'},
  {id:2, child: 'Solutions', name:'For small business'},
  {id:3, child: 'For small business', name:'From business card websites to landing pages'},
  {id:4, child: 1, name:'Online store'},
  {id:5, child: 4, text:'A fast and easy way to grow sales'},
  {id:6, child: 1, name:'Blogginng'},
  {id:7, child: 6, text:'Everything you need to start a blog'},
  {id:8, child: 1, name:'Enterprise solutions'},
  {id:9, child: 8, text: 'For those who want to sell websites with Nova'},
  {id:10, child: 1, name:'Hire a professional'},
  {id:11, child: 10, text: 'Order a website from Nova studio'},

  {id:'', name:'The team', isOpen:true, parent:true, className: 'menu__item--parent'},
  

  
  
 
]

// https://weblium.com/create-a-travel-website
     
    
}
  

export default header

