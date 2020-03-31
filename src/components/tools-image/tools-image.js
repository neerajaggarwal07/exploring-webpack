import Tools from './tools.jpg';
import './tools-image.scss';

class ToolImage {

    render(){
        const img = document.createElement('img');
        img.alt = "Tools";
        img.classList.add('tool-img');
        img.width = 300;
        img.src = Tools;
        const body  =  document.querySelector('body');
        body.appendChild(img);
    
    }
}

export default ToolImage;