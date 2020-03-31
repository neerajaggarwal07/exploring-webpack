import './heading.scss';

class Heading {


    render(pagename){
        const h1 = document.createElement('h1');
        const  body = document.querySelector('body');
        h1.innerHTML = 'This is Heading. this is  "'+pagename+'" page';
        h1.classList.add('heading')
        body.appendChild(h1);     
    }
}

export default Heading;

