
import ToolsImage from './components/tools-image/tools-image';
import Heading from './components/heading/heading';
//import _ from 'lodash';

//import React from 'react';

const heading = new Heading();
//heading.render(_.upperFirst('tools image'));
heading.render('tools image');


const toolImage = new ToolsImage();
toolImage.render();



if(process.env.NODE_ENV === 'production'){
    console.log('Production Mode');
}else if(process.env.NODE_ENV === 'development'){
    console.log('Development Mode')
}




