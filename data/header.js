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
          secondItem: ['Graphic'['ddd', 'ddddd'], 'Design'],
          thirdItem: []
        },
        {
          firstItem: ['Pricing'],
          href: 'pricing',
        },
        {
          firstItem: ['Features'],
          href: 'features',
        },
    ],

    menu2: [
      {
  team: {
        teamName: "The team",
        className: 'menu__item--parent',
        href: 'team',
        isOpen: true,
        secondItem: ['Ola', 'Ela']
      },
    },

    {
       service: {
        teamName: ["Service"],
        className: 'menu__item--parent',
        href: 'team',
        isOpen: true,
        secondItem: ['Ola', 'Ela']
      },
    }
      

     
    ],
  
initialTasks: [
  {id:1, name:'The team', isOpen:true, id1:true, className: 'menu__item--parent'},
  {id:2, name:'Service', id1:true, className: 'menu__item--parent'},
  {id:1, name:'Ola',  child: 1},
  {id:1, name:'Ela', child: 1},
  {id:5, name:'Task5', idColumn: 3, user: 'Ana'},
]
     
    
}
  

export default header

