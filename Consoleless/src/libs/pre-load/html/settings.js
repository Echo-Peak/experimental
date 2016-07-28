export let settingsHTML = `
<div class="Consoleless-settings" id='Consoleless-settings'>
  <div class="Consoleless-settings-ui">
    <h3>Settings</h3>
    <div>
      <label for="Consoleless-settings-toggle">Enable</label>
      <input type="checkbox" name="Consoleless-settings-toggle" id="Consoleless-settings-toggle"/>
    </div>
    <div >
      <label for="Consoleless-settings-showTitle">Show title</label>
      <input type="checkbox" name="Consoleless-settings-showTitle" id="Consoleless-settings-showTitle"/>
    </div>
    <div >
      <label for="Consoleless-settings-animations">Animations</label>
      <input type="checkbox" name="Consoleless-settings-animations" id="Consoleless-settings-animations"/>
    </div>

    <div >
      <label for="Consoleless-settings-bind">Bind to console</label>
      <input type="checkbox" name="Consoleless-settings-bind" id="Consoleless-settings-bind"/>
    </div>
    <div id="Consoleless-settings-reset">
      <button id="Consoleless-settings-reset" >Reset settings</button>
    </div>
  </div>
</div>
`
