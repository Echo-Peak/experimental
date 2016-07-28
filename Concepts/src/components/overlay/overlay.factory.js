export default function overlayFactory(){

    const angular = {
        column1:[
            ['functions' , {content:[
              'angular.bind' ,
                'angular.bootstrap' ,
                'angular.copy' ,
                'angular.element' ,
                'angular.equals' ,
                'angular.extend' ,
                'angular.forEach' ,
                'angular.isArray' ,
                'angular.toJson' ,
                'angular.identify' ,
                'angular.injector' ,
                'angular.merge'
            ]}],
            ['core' , {content:[
                'ng-app' ,
                'ng-bind' ,
                'ng-model' ,
                'ng-click' ,
                'ng-class' ,
                'ng-copy' ,
                'ng-if' ,
                'ng-show' ,
                'ng-repeat' ,
                'ng-hide' ,
                'ng-options' ,
                'ng-controller' ,
                'ng-include' ,
                'ng-init'
            ]}]

        ],
        column2:[

            //put controllers , directives ...ect in col 3 and have all the providers and services in col 2
            ['services',{content:[
                '$anchorScroll',
                '$animate',
                '$cacheFactory',
                '$compile',
                '$controller',
                '$document',
                '$window',
                '$filter',
                '$http',
                '$local',
                '$interpolate',
                '$q',
                '$rootElement',
                '$timeout',
                '$interval',
                '$parse',
                '$log',
                '$resource'


            ]}],
            ['providers',{content:[
                '$anchorScrollProvider' ,
                '$animateProvider' ,
                '$compileProvider' ,
                '$controllerProvider' ,
                '$httpProvider' ,
                '$interpolateProvider',
                '$logProvider' ,
                '$parseProvider' ,
                '$rootScopeProvider' ,
                '$filterProvider' ,
                '$templateRequestProvider'
            ]}]
        ],
        column3:[
            ['misc',{content:[
                '$scope' ,
                '$watch' ,
                '$watchCollection' ,
                '$sce' ,
                '$sceDelegate' ,
                '$cacheFactory' ,
                '$xhrFactory' ,
                '$broadcast' ,
                '$emit' ,
                '$rootScope' ,
                '$apply' ,
                '$applyAsync' ,
                '$digest'
            ]}],

            ['create',{content:[
               'factory' ,
               'controller' ,
               'directive' ,
               'decorator' ,
               'animation' ,
               'service' ,
               'provider' ,
               'constant' ,
               'decorator' ,
               'filter' ,
               'run block' ,
               'config block' ,
               'value'
            ]}]
        ],
        column4:[
            ['links',{content:[
            'Egg Head IO' ,
            'Angular Docs' ,
            'ng-conf' ,
            'Angular 2 Docs' ,
            'Codepen' ,
            'Plunker dev team' ,
            'local resource'
            ]}]
        ],
        column5:[
            ['helpLinks',{content:[
                'angular docs' ,
                'creapy chat bot' ,
                'cleverbot' ,
                'code school' ,
                'tree house'
            ]}],
            ['Best Practice',{content:[
                'when to use $scope' ,
                'controller as syntax' ,
                'optimize ng repeat' ,
                'compile compile $compile!!!' ,
                'desighn patterns' ,
                'performance testing'

            ]}],
            ['otherApis',{content:[
               'angular animate' ,
               'angular material' ,
               'angular aria' ,
               'angular ui router' ,
               'angular mock' ,
               'angular sanitize' ,
               'angular ui bootstrap' ,
               'angular util'
            ]}],
            ['spamLinks',{content:[
                'spamlink! one' ,
                'spamlink! two' ,
                'spamlink! three' ,
                'spamlink! four' ,
                'spamlink! five' ,
                'spamlink! lost count'
            ]}]

        ]
    }
    const jquery = {
        column1:[
           ['Effects' ,{content:[
             'hide',
               'show',
               'toggle',
               'animate',
               'delay',
               'finish',
               'queue',
               'stop',
               'dequeue',
               'fadeIn',
               'fadeOut',
               'fadeToggle',
               'fadeTo',
               'slideDown',
               'slideUp',
               'slideToggle'
           ]}],
            ['Events' ,{content:[
                'bind',
                'blur',
                'change',
                'click',
                'contextmenu',
                'dbclick',
                'delegate',
                'die',
                'error',
                'focus',
                'focusin',
                'focusout',
                'hover',
                'live',
                'load',
                'mousedown',
                'mouseenter',
                'on' ,
                'off',
                'ready',
                'trigger',
                'toggle',
                'unbind'

            ]}]
        ],
        column2:[
            ['Ajax' ,{content:[
                'ajaxComplete',
                'ajaxError',
                'ajaxSend',
                'ajaxStop',
                'ajaxSuccses',
                'ajax',
                'ajaxSetup',
                'ajaxTranport',
                'get',
                'getJSON',
                'getStript'

            ]}],
            ['Dimensions' ,{content:[
                'height',
                'innerHeight',
                'innerWidth',
                'outerHeight',
                'outerWidth',
                'width'
            ]}],
           ['Core Jquery' ,{content:[
                'jQuery',
               'holdReady',
               'noConflict',
               'sub',
               'when'
            ]}],
            ['Manipulation' ,{content:[
               'addClass',
                'after',
                'append',
                'appendTo',
                'attr',
                'before',
                'css',
                'detactch',
                'empty',
                'hasClass',
                'height',
                'clone',
                'html',
                'offset',
                'prop',
                'remove'
            ]}],

        ],
        column3:[
            ['Utilitys' ,{content:[
                'clearQueue',
                'dequeue',
                'boxModel',
                'browser',
                'contains',
                'data',
                'each',
                'globalEval',
                'isArray',
                'isObject',
                'isNumber',
                'grep',
                'merge',
                'noop',
                'now',
                'proxy',
                'html',
                'parseHTML'
            ]}]
        ],
        column4:[
           ['Help links' ,{content:[
                'porn hub',
               'jquery website',
               '^^ MUCH better than this shit ass website',
               'Codeshool',
               'Learn Code.acadamy',
               'Treehouse',
               'Thoughts in-depth'
            ]}],
        ],
        column5:[
            ['Best of practice' ,{content:[
                'dont use it!',
                'food for thoughts'
            ]}],
            ['jane! jane? or jane^' ,{content:[
                'dont use it!',
                'food for thoughts'
            ]}],
        ]

    }
    const sass = {
        column1:{
            sass:[
                ['sassify!!'],
                ['sassify!!'],
                ['sassify!!']
            ]
        },
        column2:{

        },
        column3:{

        },
        column4:{

        },
        column5:{

        }
    }
    const gulp = {
        column1:[
            ['features' ,{content:[
             'foo','bar','cats' ,'jnagles','flufy'
            ]}],
            ['syntax2.0' ,{content:[
             'o;;oasd','sex','death' ,'jnagles','flufy' ,'majoras mask'
            ]}],
            ['DAM IT' ,{content:[
             'oh not','sex','death' ,'jnagles','flufy' ,'majoras mask'
            ]}],
        ],
        column2:[
            ['syntax' ,{content:[
             'foo','sex','death' ,'jnagles','flufy' ,'majoras mask'
            ]}]
        ],
        column3:[
            ['pupp' ,{content:[
             'foo','sex','death' ,'jnagles','flufy' ,'majoras mask' ,'shoots'
            ]}]
        ],
        column4:[
            ['sex' ,{content:[
             'foo','sex','death' ,'jnagles','flufy' ,'majoras mask', 'just like it'
            ]}]
        ],
        column5:[
            ['fiels' ,{content:[
             'foo','fields of barlu'
            ]}]
        ],


    }
    let all = {
        angular:angular,
        jquery:jquery,
        sass:sass,
        gulp:gulp
    };
    let getSelected = function(data){
        return all[data];
    }
    return{
        all:all,
        get:getSelected
    }
}
