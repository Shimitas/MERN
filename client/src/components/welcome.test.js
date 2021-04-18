import { createElement } from 'react';
import ReactDom from 'react-dom';
import Welcome from './welcome.component';


it('should render a div with Welcome String',()=>{

    let myDiv=createElement('div');
    ReactDom.render(<Welcome/>,myDiv);
    escape(myDiv.innerHTML).toEqual('<h1>Welcome</h1>')

})
