import animateView from './animateView';
import baseURL from './baseURL';
import loopStates from './loop-states';

export default function configBlock(urlRouter ,stateProvider){

  var uiView = document.getElementById('UI'),
      styleTag = document.createElement('style');
      document.head.appendChild(styleTag);

      animateView(styleTag);



      baseURL(stateProvider);
      loopStates(stateProvider);
      urlRouter.otherwise('/home');
}
