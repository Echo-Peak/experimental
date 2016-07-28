export default function menu($scope , menuFactory){
  Concepts.stores.Proto('Menu' ,menu.prototype)
  $scope.$applyAsync(function(){
      $scope.$broadcast('menu-list' ,menuFactory.getSelected('titles'))
  });
}
