import {titleLinks} from '../../menu/title-links';

export default function($templateCache){
  let ready ='';

  function compile(item){
      let mdMenuItem = document.createElement('md-menu-item');
      let mdButton = document.createElement('md-button');
      mdButton.setAttribute('ui-sref' ,item.url); //sets the url for the button
      mdButton.innerText = item.title; //sets the title for the button element
      mdMenuItem.appendChild(mdButton); //md-menu-item has md-button as a child node
      ready += mdMenuItem.outerHTML; //adds to readys
  }

titleLinks.forEach(compile);//gets menu title links(same links in menu module) since i have the formated title and url already set up
function precompile(telm){
let template = $templateCache.get('header/options/index'); //get desired template from template cache
let stringToHTML = angular.element(template); //convert templateCache value to html element
let getInsertPoint = stringToHTML[0].querySelector('#header_options'); //gets the entry point to transclude whats inside ready
getInsertPoint.innerHTML =ready; // ready is a string thus the dom will parse this as such

getInsertPoint.removeAttribute('id'); //remove id since im done working on element
telm[0].appendChild(stringToHTML[0]); //the dom gets updated with this content
}
      return{
          restric:'E',
          compile:precompile
      }
}
