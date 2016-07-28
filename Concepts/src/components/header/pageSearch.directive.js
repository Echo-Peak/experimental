export default function headerPageSearch(){

    let link = (scope ,elm ,attr)=>{
      var input = elm[0].querySelector('input');
        var target = elm[0].children[1];

        input.addEventListener('focus' ,function(){
            target.style.display = 'flex'

        });
        input.addEventListener('blur' ,function(){

            setTimeout(function(){
               target.style.display = 'none'
            },800)
        });
    }

    //this is for page docs
var tt = `<section layout="column" style="display:none" dropdown-list="dropdown-list" class="md-whiteframe-z2">
  <md-button ng-repeat="list in header.view.getPageDocs | filter:header.searchDocs" ui-sref="{{list.state}}" ng-bind="list.name" aria-label="{{list.name}}" class="section-list"></md-button>
</section>`
    return {
        restric:'E',
        template:`
<md-input-container>
  <label>Search {{header.view.currentPage}} docs</label>
  <input type="text" ng-model="header.searchDocs"/>
</md-input-container>
`,
        scope:false,
        replace:true

    }
}
