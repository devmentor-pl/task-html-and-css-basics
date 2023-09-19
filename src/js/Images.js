import logo from '../../src/images/logo.png';
import ceo from '../../src/images/ceo.png';
import cfo from '../../src/images/cfo.png';
import cto from '../../src/images/cto.png';

export const Images = (path, container) => {
    const div = document.createElement('div')
    div.className='team__photo'
    const imageElement = document.createElement('img')
    imageElement.src = path;
    document.body.appendChild(imageElement)
 
    return div
}

Images(logo)




