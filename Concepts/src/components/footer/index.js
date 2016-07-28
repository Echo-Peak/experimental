import footerController from './footer.controller';
import footer from './footer.directive';
Concepts.Modules.footer = angular.module('footer',[])
.controller('footerController',['$scope',footerController])
.directive('conceptsFooter' ,footer)

;export default Concepts.Modules.footer.name
