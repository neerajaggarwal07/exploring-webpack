
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';
//import _ from 'lodash';
//import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();



const heading = new Heading();
//heading.render(_.upperFirst('hello world'));
heading.render('hello world');


if(process.env.NODE_ENV === 'production'){
    console.log('Production Mode');
}else if(process.env.NODE_ENV === 'development'){
    console.log('Development Mode')
}




