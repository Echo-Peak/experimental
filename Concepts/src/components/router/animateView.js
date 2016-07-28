export default function animateView(styleTag) {
  var cornersX = [0 ,1918,-1918];
    var cornersY = [1000 ,1918 ,-1918];
    var css = `
/*RANDOMIZE ng-enter animation on main content*/
    .UI.ng-enter{
    transform:translateY(${cornersY[Math.floor(Math.random()*cornersY.length)]}px) translateX(${cornersX[Math.floor(Math.random()*cornersX.length)]}px)

}
    .UI.ng-leave-active{
    transform:translateY(${cornersY[Math.floor(Math.random()*cornersY.length)]}px) translateX(${cornersX[Math.floor(Math.random()*cornersX.length)]}px)

}
`
styleTag.innerHTML = css
}
