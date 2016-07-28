export default function(){

  let find = (id)=> document.querySelector(`[data-element=${id}]`)
  let DOM = {
    mount:find('mount'),
    enterCode:find('enter-code'),
    boxes:find('boxes'),
    win:find('win'),
    qrParams:find('qr-params'),
    keyInput:find('key-input'),
    enter:find('enter')
  }
  return DOM
}
