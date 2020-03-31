import './hello-world-button.scss';
class HelloWorldButton {

    buttonClass = 'hello-world-button'
    render(){
        const  body = document.querySelector('body');
        const button = document.createElement('button');
        button.classList.add(this.buttonClass);
        button.innerHTML = 'Click Me';
        button.onclick = function(){
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text')
            body.appendChild(p);
        }
       
        body.appendChild(button);
    }
}

export default HelloWorldButton;