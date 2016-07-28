 export let stylesHTML = `

<div id="Consoleless-style-editor" class="Consoleless-style-editor">
  <div class="Consoleless-style-editor-ui">
    <ul>
      <h3>Consoleless UI</h3>
      <li>Display
        <div id="Consoleless-style-display">
          <input type="number" placeholder="Width: 700px" style="width:100px" min="700" max="1900" step='25'/>
          <input type="number" placeholder="Height: 300px" style="width:100px" min="400" max="1050" step='25'/>
          <button style="cursor:pointer" id="Consoleless-style-setDisplay">Set</button>
        </div>
      </li>
      <li>Pannel
        <div id="Consoleless-style-pannel">
          <input type="number" placeholder="Width: 700px" style="width:100px" min="600" max="1900" step='25'/>
          <input type="number" placeholder="Height: 40px" style="width:100px" min="40" max="80" step='5'/>
          <button style="cursor:pointer" id="Consoleless-style-setPannel">Set    </button>
        </div>
      </li>
      <li id="Consoleless-style-displayBackground">Display background
        <input type="text" placeholder="RGB"/>
      </li>
      <li id="Consoleless-style-opacity">Opacity
        <input type="number" placeholder="Number" min='0.1' max='1' step='0.1'/>
      </li>
      <li id="Consoleless-style-consoleDelay">Console delay
        <input type="number" placeholder="Number" min='2000' max='60000' style='width:80px' step='1000'/>
      </li>
    </ul>
    <ul>
      <h3>Types colors</h3>
      <li id="Consoleless-style-number">Number
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <li id="Consoleless-style-string">String
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <li id="Consoleless-style-function">Function
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <li id="Consoleless-style-object">Object
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <li id="Consoleless-style-false">False
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <li id="Consoleless-style-true">True
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <li id="Consoleless-style-array">Array
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <li id="Consoleless-style-null">Null
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <li id="Consoleless-style-nan">NaN
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <li id="Consoleless-style-undefined">undefined
        <input type="text" placeholder="RGB or HEX "/>
      </li>
      <button style="padding:10px; width:200px; margin:30px; cursor:pointer" title="apply settings" id="Consoleless-style-apply">Apply      </button>
    </ul>
  </div>
</div>
`
