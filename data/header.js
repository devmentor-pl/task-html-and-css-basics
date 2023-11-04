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
  {id:1, name:'The team', isOpen:true, id1:true, className: 'menu__item--parent'},
  {id:2, name:'Ola',  child: 1},
  {id:3, name:'Ela', child: 1},
  {id:4, name:'Solutions', id1:true, className: 'menu__item--parent'},
  {id:5, child: 4, name:'For small business', text: 'From business card websites to landing pages'},
  {id:6, child: 5, name:'website', text: 'From business card websites to landing pages'},
 
]

// https://weblium.com/create-a-travel-website
     
    
}
  

export default header

