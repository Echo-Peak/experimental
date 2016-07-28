export default function(root){
root.$on('$stateChangeError' ,function(err){
  console.log(err)
})
}
