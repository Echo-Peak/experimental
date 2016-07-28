export default function menuFactory(){
//loads all template cache
let mainTitles = [
    //TITLE , STATEURL , FA-ICON
    ['Angular' , 'angular' , 'cog'],
    ['Jquery' , 'jquery' , 'cogs'],
    ['Sass' , 'sass' , 'facebook'],
    ['Tweenmax (GSAP)' , 'tweenmax' , 'th-large'],
    ['Gulp' , 'gulp' , 'bars'],
    ['Node' , 'node' , 'recorder'],
    ['HTML' , 'html' , 'send'],
    ['CSS' , 'css' , 'clipboard'],
    ['Lodash' , 'lodash' , 'bomb']
];
const angular = [
        {desc:'Get Started' ,state:'angular.start' ,class:'fa-facebook' , name:'Help'},
        {desc:'Controllers' ,state:'angular.controllers',class:'fa-cogs' , name:'Controllers'},
        {desc:'Directives' ,state:'angular.directives',class:'fa-cube' , name:'Firectives'},
        {desc:'Factorys' ,state:'angular.factorys',class:'fa-cloud' , name:'Factorys'},
        {desc:'Servies' ,state:'angular.services',class:'fa-circle' , name:'Services'},
        {desc:'Filters' ,state:'angular.filters',class:'fa-coffee' ,name:'Filters'},
        {desc:'Best Practices' ,state:'angular.bestPrac',class:'fa-bomb' , name:'Best Practices'},
        {desc:'Cool Examples' ,state:'angular.examples',class:'fa-crop' , name:'Examples'}

    ];


const jquery = [

        {desc:'Get Started' ,state:'jquery.help',class:'fa-cogs' , name:'help'},
        {desc:'Dom' ,state:'jquery.dom',class:'fa-cube' , name:'dom'},
        {desc:'UI' ,state:'jquery.ui',class:'fa-cloud' , name:'ui'},
        {desc:'Events' ,state:'jquery.events',class:'fa-circle' , name:'events'},
        {desc:'Syntax' ,state:'syntax',class:'fa-coffee' ,name:'syntax'},
        {desc:'best practive' ,state:'jquery.bestPrac',class:'fa-bomb' , name:'best Prac'},
        {desc:'Stuff' ,state:'jquery.examples',class:'fa-crop' , name:'Examples'}


    ];
const sass = [

        {desc:'Get Started' ,state:'sass.help',class:'fa-cogs' , name:'help'},
        {desc:'The syntax' ,state:'sass.syntax',class:'fa-cube' , name:'syntax'},
        {desc:'Advance sass' ,state:'sass.advance',class:'fa-cloud' , name:'advance'},
        {desc:'Cool thingamabobs' ,state:'sass.examples',class:'fa-circle' , name:'examples'}

    ];
const tweenmax = [
        {desc:'Get Started' ,state:'tweenmax.help',class:'fa-cogs' , name:'help'},
        {desc:'Why GSAP?' ,state:'tweenmax.why',class:'fa-cube' , name:'why'},
        {desc:'The Syntax' ,state:'tweenmax.syntax',class:'fa-cloud' , name:'syntax'},
        {desc:'The Events' ,state:'tweenmax.events',class:'fa-circle' , name:'events'},
        {desc:'Tween it up!!!' ,state:'tweenmax.manager',class:'fa-cloud' , name:'manager'},
        {desc:'Yep cool things' ,state:'tweenmax.coolthings',class:'fa-circle' , name:'coolthings'}

    ];
const gulp = [
        {desc:'Get Started' ,state:'gulp.help',class:'fa-cogs' , name:'help'},
        {desc:'Why Gulp?' ,state:'gulp.why',class:'fa-cube' , name:'why'},
        {desc:'Syntax' ,state:'gulp.syntax',class:'fa-cloud' , name:'syntax'},
        {desc:'Best thingamajigs' ,state:'gulp.bestPrac',class:'fa-circle' , name:'best prac'},
        {desc:'Gulp with node?' ,state:'gulp.node',class:'fa-cloud' , name:'node'},
        {desc:'Gulp vs Grunt vs YOU!!!!!!!!!' ,state:'gulp.vs',class:'fa-circle' , name:'vs'}

    ];
const node = [
    {desc:'Get Started' ,state:'node.help',class:'fa-cogs' , name:'help'},
    {desc:'Why Gulp?' ,state:'node.why',class:'fa-cube' , name:'why'},
    {desc:'Syntax' ,state:'node.syntax',class:'fa-cloud' , name:'syntax'},
    {desc:'node' ,state:'node.bestPrac',class:'fa-circle' , name:'bestPrac'},
    {desc:'Gulp with node?' ,state:'node.node',class:'fa-cloud' , name:'node'},
    {desc:'Gulp vs Grunt vs YOU!!!NODE IFY!!!!!!' ,state:'node.vs',class:'fa-circle' , name:'vs'}


    ];
const html = [
    {desc:'Get Started' ,state:'html.help',class:'fa-cogs' , name:'help'},
    {desc:'Why HTML?' ,state:'html.why',class:'fa-cube' , name:'why'},
    {desc:'Syntax' ,state:'html.syntax',class:'fa-cloud' , name:'syntax'},
    {desc:'node' ,state:'node.bestPrac',class:'fa-circle' , name:'bestPrac'},
    {desc:'Gulp with html?' ,state:'html.node',class:'fa-cloud' , name:'node'},
    {desc:'html things' ,state:'html.vs',class:'fa-circle' , name:'vs'}



    ];
const css = [
    {desc:'Get Started' ,state:'css.help',class:'fa-cogs' , name:'help'},
    {desc:'Why css?' ,state:'css.why',class:'fa-cube' , name:'why'},
    {desc:'Syntax' ,state:'css.syntax',class:'fa-cloud' , name:'syntax'},
    {desc:'node' ,state:'css.bestPrac',class:'fa-circle' , name:'bestPrac'},
    {desc:'Gulp with css?' ,state:'node.node',class:'fa-cloud' , name:'node'},
    {desc:'html things' ,state:'css.vs',class:'fa-circle' , name:'vs'}


    ];
const lodash= [
    {desc:'Get Started' ,state:'lodash.help',class:'fa-cogs' , name:'help'},
    {desc:'Why css?' ,state:'lodash.why',class:'fa-cube' , name:'why'},
    {desc:'Syntax' ,state:'lodash.syntax',class:'fa-cloud' , name:'syntax'},
    {desc:'lodash' ,state:'lodash.bestPrac',class:'fa-circle' , name:'bestPrac'},
    {desc:'lodash with css?' ,state:'lodash.node',class:'fa-cloud' , name:'node'},
    {desc:'lodash things' ,state:'lodash.vs',class:'fa-circle' , name:'vs'}

    ];
const javascript= [
    {desc:'Get Started' ,state:'javascript.help',class:'fa-cogs' , name:'help'},
    {desc:'Why css?' ,state:'javascript.why',class:'fa-cube' , name:'why'},
    {desc:'Syntax' ,state:'javascript.syntax',class:'fa-cloud' , name:'syntax'},
    {desc:'lodash javascrip[t]' ,state:'javascript.bestPrac',class:'fa-circle' , name:'bestPrac'},
    {desc:'javascript with css?' ,state:'javascript.node',class:'fa-cloud' , name:'node'},
    {desc:'javascript things' ,state:'javascript.vs',class:'fa-circle' , name:'vs'}


    ];
const angularMaterial =[
    {desc:'Get started' ,state:'angularMaterial.help' ,class:'fa-facebook' , name:'help'},
    {desc:'Why angularMaterial?' ,state:'angularMaterial.why' ,class:'fa-facebook' , name:'why'},
    {desc:'Best thingamajigs' ,state:'angularMaterial.bestPrac' ,class:'fa-facebook' , name:'bestPrac'},
    {desc:'Themes & options' ,state:'angularMaterial.themes' ,class:'fa-facebook' , name:'themes'},
    {desc:'Grid System' ,state:'angularMaterial.grid' ,class:'fa-facebook' , name:'grid'},
    {desc:'Layout guide' ,state:'angularMaterial.layout' ,class:'fa-facebook' , name:'layout'},
    {desc:'Core directives' ,state:'angularMaterial.directives' ,class:'fa-facebook' , name:'directives'},
    {desc:'Core providers' ,state:'angularMaterial.providers' ,class:'fa-facebook' , name:'providers'},
    {desc:'typography' ,state:'angularMaterial.typography' ,class:'fa-facebook' , name:'typography'},
    {desc:'Servacies' ,state:'angularMaterial.services' ,class:'fa-facebook' , name:'services'}
    ];
const exteneded = [
    {type:'Indepth guide' ,class:'fa-fax', tooltip:'See indepth guide'},
    {type:'Help' ,class:'fa-database', tooltip:'Need help? Check out the forms'},
    {type:'API' ,class:'fa-fire', tooltip:'See the API referance for this libary'},
    {type:'Tutorial' ,class:'fa-leaf', tooltip:'See twitch vods'},
];


var all = {
    titles:mainTitles,
    exteneded:exteneded,
    angular:angular,
    jquery:jquery,
    sass:sass,
    tweenmax:tweenmax,
    gulp:gulp,
    node:node,
    html:html,
    css:css,
    lodash:lodash,
    javascript:javascript,
    angularMaterial:angularMaterial
}

let getSelected = function(data){
    return all[data]
}
return {
    all:all,
    getSelected:getSelected
}
}
