
declare var customElements: any;

import {dom} from '../inc/dom';
import {WAElement} from '../inc/';

export const HelloWorld = function(dom: any){

    return class HelloWorld extends WAElement {

        constructor(){
            super();
        }

        connectedCallback() {
            this.appendChild(
               <div><b>hello, world!</b></div>
            );
        }
        
        static register() {
            customElements.define('x-hello-world', HelloWorld);
        }

    };
}(dom);
