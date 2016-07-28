export default function UID(){
var date = +new Date();
var uid = Math.floor(Math.random()*date);
return uid.toString(30)
}
