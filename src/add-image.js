import Tools from './tools.jpg';

function addImage(){

    const img = document.createElement('img');
    img.alt = "Tools";
    img.width = 300;
    img.src = Tools;
    const body  =  document.querySelector('body');
    body.appendChild(img);
}

export default addImage;