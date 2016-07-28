export let displayStyles = `
.Consoleless-disabled{
  display:none; !important
}
.Consoleless-display {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 700px;
  height: 400px;
  z-index:5812;
  font-size:15px;
  font-family:"Lucida Sans Unicode";
  overflow:hidden;
  box-sizing:border-box;
  box-shadow:0px 0px 15px rgba(0,0,0,0.2);
}

.Consoleless-display-pannel{
  width:inherit;
  height:25px;
  box-shadow:0px 2px 10px rgba(0,0,0,0.2);
  background:inherit;
  position:absolute;
  top:0px;
  z-index:222333;
}

.Consoleless-display-title{

  margin:30px;
}
.Consoleless-display-ui{
  overflow-y:scroll;
  width:inherit;
  height:inherit;
  position:absolute;

}
.Consoleless-display-ui::-webkit-scrollbar {
  width:10px;
  background:rgba(0,0,0,0.1);
}
.Consoleless-display-ui::-webkit-scrollbar-thumb {

  background:rgba(53, 131, 56,1);
}



.Consoleless-display > .Consoleless-display-ui > ul{

margin:0;
margin-top:25px;
padding:0;
overflow:hidden;
}
.Consoleless-display-fade{
  transition:all .4s;
  opacity:0;
  height:0px !important;
  margin-top:0px !important;
  padding-bottom:0px !important;
  min-height:0px !important;
}
.Consoleless-display-clear{
padding:5px 15px;
cursor:pointer;
background:rgba(53, 131, 56,1);
border:none;
position:absolute;
z-index:2;
right:0px;
color:white;
}

.Consoleless-display > .Consoleless-display-ui > ul  li{

  box-sizing:border-box;
padding-left:50px;
margin-top:5px;
padding-bottom:5px;
position:relative;
height:auto;
min-height:40px;
max-height:200px;
}

.Consoleless-display > .Consoleless-display-ui > ul  span{
padding-left:10px;
padding-right:10px;
}

.Consoleless-display-log{
  background:rgba(255,255,255,0.8);
  list-style:none;
  height:40px;
  border:2px solid rgb(179, 217, 255);

}
.Consoleless-display-log::before{


}
.Consoleless-display-log::after{




}

.Consoleless-display-warn{
  border:2px solid rgba(255, 184, 77,0.8);
  background:white;
  list-style:none;

}
.Consoleless-display-warn::before{
position: absolute;
content:'';
  background:rgba(0, 0, 0,0.8);
height:50px;
width:50px;
left:10px;
z-index:2;
 background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABhwAAAYcBOqddywAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKVSURBVEiJvZbLaxNRFIe/6UObmsZgBXWsqZYqDWqxI9WWghTxhRRaROnGdxUqjVWKuPIfEKR7cSMouDGuFNzUbcHFlDQJqIho0bTWgoqSR5POdTFNYtJkZjJp+oOBmXvOPedj7uHcgxCCch7tk6+hnP2SEAJbUuUG4AHQDfhxeO/jnYiXGqbGXnZAqhlGpK4AtUAz8Q8hwF9qmCpbyYMHdiBSw8vJAVyIpZuo8sa1AUjO+4DmvNXDwNnKA6hyG3ARqM6z1AEjhHu2VxYA7gJbitj2kZy9UDmAgLcHGACkIh61aPGrqPLu1QcIdTpY+n0PcJt4tgAjVsNa7wOqfAZ4AtQDsG0s156ch4Wn6a9ZYAAl8nZ1AFTZBbxGbzq6Or6u9JtqSr9pwDPh7Lou7XkRMwpt9QjOAYqhh0jkxz0tRQO9ZoHNAVS5EbgNrDf0i3/MX3GjxXzLLbsMAKnmBtBm6hd7v2IncATosw8w3b4LkRrCyp2x+LnQqhMYQZU32QNILdwCPKbJjXUQGCwdINhxCDhv6GNNdcAoU54W6wCJmXUkv98Biv66EtWK0K4VMhTuA2rTcdD8QPEK3qCAqzf7/etVoUL8XzNAH0okaAwQ6nSw+O0lcNQomg1pwCOUyLAxgCoPAo/Rz664nN3QkG2M/JmEv5NmED+AfpRIxjEXQG+5b9Ar11j5rXhuHGbHzXYJ4Llwdl1Kt+jcIqyquwy0mya3Lwk4KUUDxzIpM6ZwtwctPkp2zquUXGixMVTZnQuQ+OIDdloOY37eRsrMj3oN6HPeBCCXE7VEqdTv70//gSFg6xomB9hLNHgiDdBI8TmvUqoGNqdvuYdAK1DSSF2GBBCm2uXP9oF3p9xEp51rCPATJRL9B1+VFqydMo7MAAAAAElFTkSuQmCC);
background-repeat:no-repeat;

}

.Consoleless-display-error{
  border:2px solid rgba(255, 51, 51,0.8);
  background:white;
  list-style:none;

}
.Consoleless-display-error::before{
  position: absolute;
  content:'';
  height:50px;
  width:50px;
  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACNAAAAjQBWr9lrwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAS/SURBVFiFxZdfaFNnGMZ/3zknJm1Z6ibTDqwgrUU3qLKt9sZiMi1qtOKFuKtRtDAUB62KKzh0EaYrVfy3zRWdEenQadkuVgVBh22vZi+8GMpAwspkQqVSl8aQE/P5fbtIk502f3rKhL2X+d7zPM/7fH/eN0Jrzf8ZVqEftZRCtbYuJBarRcpHxvXrI8Ky1GzBVTot2LNnnh4ZeRsp/zauXftdVFamnTliugMqnRY6GGzAtruBeuBPysr2G3fu/CIsy7VdKp2G9vZaPTzcBQSBcebMOWQMDfUJy5LZPCNPcXt7DbZ9BmgCXgeWk0x2q1BopZZSuCbv6Figh4dPApuBN4AaXrz4QgUC67WUOedzArSUQgeDDXp4+HtgpWNNACsYH+9VgcBG58dFyAX79tXqu3e/A0KAx4GzGNs+p4LBHToa9cLkFmgphWpufo94/GugYbozWY1AFJ9vrzEwcNNp4xTyzs4aPTR0EljnIJ+OM0pZ2SHjxo1LBoC+fbuCeLyzBHm2glps+8SkjVO2wyV5FqeKZLJTbdu2NEMWjXqAeZOLpSIr4rRqalqrpTRz5Lt3v6OHhs4C60uQO3H8mOZrBoDYuTNGeXkEGCVj0UwfLyad/kYFAiEt5RwOHKjV9+6dANZQ5GpPCxv4kerq+7lrqCcmvKqlpZVEIgy85QJEA39QVfUTo6MNwKpZkPeKxsaDnDr1ZMo74BDRDVS6FPESMJl5+/LIDY8n/yHSUlpqzZodk05UuQR2EzameZZgMGx2dcWzP+YJgLzteBUibKCXZcs+M3t7x5wLBa+c8PtTRn//JSoqwrg7mDOSi8bGgyISGZu+WNCBbOhYzKtCoa2kUkeARczeiTimeZ66ui4RiYwZnvzbWezRyairrEwZg4NX8fmOAolZkissK0Jz82Gzt7cg+YwCALTWL5k79y8gPVNungC//5ERDidLJZUUkOuOo6MdwNxZCrAYH9+lAoF1pRpY0TOgpRQqEGiYbM2lekSpyDSeioqw0d9/Sfj9qekJBUFfETlkG08iEVYtLa06FvPmJZSYiP4ruTMyTni9+43BwatFJyItpdBbtqzAtnteITlknUiljqjVqz90OjFlIlKBQANPnnwLrHBJHgd+BR7jrosuIpU6pjZvbtUTE96cAC2lUJs2veuw3c2DE0OIU6KtbSs+3yfAiEsR2TPxkZbSkxFw61Y5T59+CryPu8pthDhNff0xY9eux8bAwHW83kO4nyeqSCQ6VShUlyF78MALLHBJHkOIbuPy5aPmhQtxAGFZ0hgc/AGf72Mg6lKEH8uqzExEHR0xyssvuKggNln5cbFkyZQ7LSzrpTEwcBOfb68LEZmJaP78+0bu40jkGmVl4UkRJcmzleeVZVnShYhsdzwszp+fmDoRPXzoVdu3byWVOgG8yb+HcQyfr5vq6h7zypXnJSrL4EhpqqamD0ine4DFDpznCHGOpUtz3bHwRBQMbieZ/JzMMBLD5/vSuHjxq+m2zyBCqEBgI7Z9HKgBUgjRQ339YaeDhSeiaNSr2trWkkisoqLiN5Yv/9k8c2a27TjjxIYNjTx7th6P5zELF/aZfX3jzpyizUil00IIYQBqNn9KC+AghDCL4fwDk9ZLA3RfuYEAAAAASUVORK5CYII=);
background-repeat:no-repeat;
left:10px;
}
.Consoleless-display-info{
  background:rgb(255,255,255);
  list-style:none;
  border:2px solid rgb(26, 140, 255);
}

.Consoleless-display-info::before{
  position: absolute;
  content:'';
  height:50px;
  width:50px;
  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAfCAYAAAAIjIbwAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2gAAAdoBhaJl+wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHNSURBVEiJ7ZW/a1NRFMc/974kkjT2B9SSIaF0EBftWNKlUCi0DqXQQbMLEohDN3EQ7Z8SLPgHtNQWba3YIoKDWytIIaASM2ibNBGDecchiZW8+340xrp44E3nvM+573vO+14lIvQ6Ql7JYo3+7BZXgWhHSq4NU1hOc6gVjlO5Qm1BLb0gV65zF7jQmd/7xBtgHjg6y0lVqcYo0A8oQ34UiJmg2gOKC8w3/KBdhR/U9skZV8dVUxGRZFztfjhhCugzlOwAx6Z3ldee2kIIGDI0F6CiFdUzQ7uNvzIoo6a2YAVo2NDKPEgHtFhlIPecO1+/k8J9TyUR4/XKHI+04ocvNLvNeLnOPcwTP21eYwZYBz535kyfGAEsL6BfnQn6x+vggI4PUwQKQBmcenUFfZjmXSpO5lKUDPCqJ1CtaORnefv4OpvAPl3I8U9c6j+0R9CGLdD8772aKsBq2OLwB4ef2kLs1lNuRMOMHXzhJnDFBVpNJ1gpfeN9Ms7a/Qk5sLQyQxdWmazU2QAu4n+bSuvJP1vkdtuxHC6lmnd5JACwVY4CBn+vPx/nt4UyUAPCARlC01N/6WgaVCTzhOmQZoQAEohQvzwkLx9M8LE9qJ8874nXvRzn0wAAAABJRU5ErkJggg==);
  background-repeat:no-repeat;
  left:10px;
}
.Consoleless-display-number{
  color:blue;
}
.Consoleless-display-string{
  color:green;
}
.Consoleless-display-null{
  color:#FF8100;
  font-weight:bold
}

.Consoleless-display-array{
  color:red;
}
.Consoleless-display-object{
  color:purple;
}
.Consoleless-display-true{
  color:#1E82FF;
  font-weight:bold
}
.Consoleless-display-false{
  color:#FF5858;
  font-weight:bold
}
.Consoleless-display-nan{
  color:purple;
  font-weight:bold
}
.Consoleless-display-function{
  color:purple;
}
.Consoleless-display-special{
  color:purple;
}
.Consoleless-display-emptyString{
  color:rgb(213, 128, 255);
}
`
