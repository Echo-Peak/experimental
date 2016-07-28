export let styleEditorStyles = `
.Consoleless-style-editor {
  position: absolute;
  background: #358338;
  top:-515px;
  box-shadow: inset 0px 0px 50px rgba(0, 0, 0, 0.2);
  width: 750px;
  height: auto;

}
.Consoleless-style-editor > .Consoleless-style-editor-ui {
  display: flex;
  width: inherit;
  height: inherit;
  flex-direction: row;
}
.Consoleless-style-editor > .Consoleless-style-editor-ui > ul {
  margin: 10px;
  padding: 0;
}
.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(1) {
  flex: 1;
  order: 1;
}
.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(1) > h3 {
  color: white;
  margin: 5px;
  font-family: "Lucida Sans Unicode";
}
.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(1) > li {
  list-style: none;
  position: relative;
  margin: 10px;
  color: white;
  font-family: "Lucida Sans Unicode";
}
.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(1) > li > input {
  position: absolute;
  left: 180px;
}
.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(2) {
  flex: 1;
  order: 2;
}
.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(2) > h3 {
  margin: 5px;
  color: white;
  font-family: "Lucida Sans Unicode";
}
.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(2) > li {
  position: relative;
  margin: 10px;
  list-style: none;
  font-family: "Lucida Sans Unicode";
  color: white;
}
.Consoleless-style-editor > .Consoleless-style-editor-ui > ul:nth-child(2) > li > input {
  position: absolute;
  left: 100px;
}
`
