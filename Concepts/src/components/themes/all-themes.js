import generate from './generate';
  //text color,background ,accent
export let allThemes = {
    default:generate('white' ,'#222' ,'#444'),
    fire:generate('black' ,'#ff0000' ,'#ff8533'),
    pink:generate('white','#E91E63' ,'#EC407A'),
    moonlight:generate('white' ,'#1f4060' ,'#3873ad'),
    dark:generate('white' ,'#222' ,'#333'),
    light:generate('#ffd480' ,'#ffcc66' ,'black'),
    material:generate('white' ,'#e62e00' ,'#ff5c33'),
    sky:generate('black' ,'2196F3' ,'#42A5F5'),
    indigo:generate('white' ,'#3F51B5' ,'#5C6BC0'),
    purple:generate('white' ,'#9C27B0' ,'#AB47BC'),
    blue:generate('white' ,'#2196F3' ,'#42A5F5'),
    teal:generate('white' ,'#009688' ,'#26A69A'),
    cyan:generate('black' ,'#00BCD4' ,'#4DD0E1'),
    green:generate('white' ,'#4CAF50' ,'#66BB6A'),
    'hot pink':generate('white' ,'#E91ED2' , '#f52ade'),
    navyblue:generate('white' ,'#1D127D' , '#312691'),
    crimson:generate('white' ,'#830303' , '#a31515'),
    black:generate('white' ,'#000' , '#111'),
    brown:generate('white' ,'#5a2900' , '#7b4314'),
    'dark green':generate('white' ,'#007409' , '#17801f')
}
