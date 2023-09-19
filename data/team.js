import { Images } from "../src/js/Images"
import ceo from '../src/images/ceo.png';


export const team = {
   
    list: [
      {
        photo: Images(ceo),
        function: 'CTO',
        data: 'Johny B Good',
        description: 'The brains behind the whole operation',
        icons: [
            './images/team-twitter.svg',
            './images/team-facebook.svg'
        ]
      },
      {
        photo: "./images/ceo.png",
        function: 'CEO',
        data: 'Roll Over Beethoven',
        description: 'The one that puts it all together',
        icons: [
            './images/team-twitter.svg',
            './images/team-facebook.svg'
        ]
      },
      {
        photo: "./images/ceo.png",
        function: 'CFO',
        data: 'Chuck Berry',
        description: 'The guy with his hand on the wallet',
        icons: [
            './images/team-twitter.svg',
            './images/team-facebook.svg'
        ]
      },
    ],
    addYou: [
        {
        id: "Yourself",
        photo: "",
        function: '',
        data: '',
        description: '',
        icons: [
            './images/team-twitter.svg',
            './images/team-facebook.svg'
        ]
      },
    ]
  }
  
  export default team
