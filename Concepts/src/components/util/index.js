import faGenerator from './FA-generator';
import gesture from './gesture';
import loremIpsum from './lorem-ipsum-generator';
import preventScroll from './prevent-scroll';

Concepts.Modules.util = angular.module('util',[])
.directive('loremIpsum' ,loremIpsum)
.constant('FA_gen' ,faGenerator)
.directive('gesture' ,gesture)
.service('preventScroll' ,preventScroll)


;export default Concepts.Modules.util.name
