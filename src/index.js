
import './index.css'
async function getComponent() {

    var element = document.createElement('div');
    const {join}= await import(/* webpackChunkName: "lodash" */ 'lodash');

    element.innerHTML = join(['Hello', 'webpack'], ' ');

    return element;
    }
  
    getComponent().then(component => {
      document.body.appendChild(component);
    });