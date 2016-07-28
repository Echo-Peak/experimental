export let settingsStyles = `
.Consoleless-settings {
  position: relative;
  background: rgba(53, 131, 56, 0.8);
  display: inline-block;
  top:-310px;
  left:300px;
  width: 260px;
  height: 230px;
  box-shadow: inset 0px 0px 10px #358338;
  padding: 20px;
}
.Consoleless-settings > .Consoleless-settings-ui h3 {
  margin: 0;
  font-family: "Lucida Sans Unicode";
  color: white;
}
.Consoleless-settings > .Consoleless-settings-ui > div {
  margin: 10px;
}
.Consoleless-settings > .Consoleless-settings-ui > div > label {
  color: white;
  font-family: "Lucida Sans Unicode";
}
.Consoleless-settings > .Consoleless-settings-ui > div > input {
  -webkit-appearance: none;
  position: absolute;
  left: 200px;
  width: 25px;
  height: 25px;
  background: #FF3333;
  cursor: pointer;
  transition: all .4s;
  outline: none;
}
.Consoleless-settings > .Consoleless-settings-ui > div > input:checked {
  background: #22BF22;
  border-radius: 50px;
}
.Consoleless-settings > .Consoleless-settings-ui > div > button {
  font-family: "Lucida Sans Unicode";
  cursor: pointer;
}

`
