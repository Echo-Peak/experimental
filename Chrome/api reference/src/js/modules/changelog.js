(function(){

    
    chromeApp.changelog  = angular.module('changelog' ,['limited.scope'])
    .controller('changelogController' ,['$scope',changelogController])
    .directive('changelog' ,changelogDirective)
    .service('updateChangelog' ,['$resource',updateChangelog]);
    
    
    let changelogController = (scope) =>{
        let changelog = this
    }
    
     let changelogDirective = () =>{
        return {}
    }
    
     let updateChangelog = (http) =>{
        return {}
    }
    
    
})()