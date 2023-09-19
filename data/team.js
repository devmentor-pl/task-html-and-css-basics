import { Images } from "../src/js/Images"

import cto from '../src/images/cto.png';
import ceo from '../src/images/ceo.png';
import cfo from '../src/images/cfo.png';

export const team = {
   
    list: [
      {
        photo: cto,
        function: 'CTO',
        data: 'Johny B Good',
        description: 'The brains behind the whole operation',
        icons: [
            './images/team-twitter.svg',
            './images/team-facebook.svg'
        ]
      },
      {
        photo: ceo,
        function: 'CEO',
        data: 'Roll Over Beethoven',
        description: 'The one that puts it all together',
        icons: [
            './images/team-twitter.svg',
            './images/team-facebook.svg'
        ]
      },
      {
        photo: cfo,
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
